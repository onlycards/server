import { setCookie } from 'hono/cookie'

import { getUserByName, createSession } from '@/model'
import {
  aWeekLater,
  randomToken,
  ServerContext,
  parseJsonBody,
  hashUserPassword,
  ACCESS_TOKEN_COOKIE,
} from '@/shared'

import { EnterData, Credentials } from './types'

const isCredentials = (value: unknown): value is Credentials =>
  value !== null &&
  typeof value === 'object' &&
  'name' in value &&
  'password' in value &&
  typeof value.name === 'string' &&
  typeof value.password === 'string'

export const getEnterData = async (c: ServerContext): Promise<EnterData> => {
  const body = await parseJsonBody(c, isCredentials)

  if (!body) {
    return {}
  }

  const user = await getUserByName(c.get('queryData'), body.name)

  if (!user) {
    return { isJsonCorrect: true }
  }

  return {
    isJsonCorrect: true,
    isTeacher: user.role === 'teacher',
    user: {
      id: user.id,
      passwordMatch:
        user.passwordHash === hashUserPassword(user.id, body.password),
    },
  }
}

export const startSession = (
  c: ServerContext,
  userId: number,
  isAdmin: boolean,
) => {
  const token = randomToken()
  const expires = aWeekLater()

  setCookie(c, ACCESS_TOKEN_COOKIE, token, {
    expires,
    secure: true,
    httpOnly: true,
    sameSite: 'Strict',
  })

  return createSession(c.get('queryAction'), userId, token, expires, isAdmin)
}
