import { StatusCode } from 'hono/utils/http-status'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'

import { aWeekLater, ServerContext, ACCESS_TOKEN_COOKIE } from '@/shared'
import {
  Session,
  getUserById,
  getSessionByToken,
  deleteSessionById,
  prolongSessionById,
} from '@/model'

import { RequestData } from './types'

export const getRequestData = async (
  c: ServerContext,
): Promise<RequestData> => {
  const queryData = c.get('queryData')
  const token = getCookie(c, ACCESS_TOKEN_COOKIE)

  if (!token) {
    return {}
  }

  const session = await getSessionByToken(queryData, token)

  if (!session) {
    return { token }
  }

  const user = await getUserById(queryData, session.userId)

  return {
    user,
    token,
    session,
  }
}

export const rejectWithCookieDeletion = (
  c: ServerContext,
  status: StatusCode = 401,
) => {
  deleteCookie(c, ACCESS_TOKEN_COOKIE)

  return c.body(null, status)
}

export const rejectWithSessionDeletion = async (
  c: ServerContext,
  sessionId: number,
  status: StatusCode = 401,
) => {
  await deleteSessionById(c.get('queryAction'), sessionId)

  return rejectWithCookieDeletion(c, status)
}

export const prolongSessionIfNeeded = (
  c: ServerContext,
  session: Session,
  token: string,
) => {
  const expires = aWeekLater()

  // Продлеваем сессию раз в сутки.
  if (expires.getTime() - session.expiresAt.getTime() < 1000 * 60 * 60 * 24) {
    return
  }

  setCookie(c, ACCESS_TOKEN_COOKIE, token, {
    expires,
    secure: true,
    httpOnly: true,
    sameSite: 'Strict',
  })

  return prolongSessionById(c.get('queryAction'), session.id, expires)
}
