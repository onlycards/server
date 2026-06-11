import { createMiddleware } from 'hono/factory'

import { ServerEnv } from '@/shared'

import {
  getRequestData,
  prolongSessionIfNeeded,
  rejectWithCookieDeletion,
  rejectWithSessionDeletion,
} from './lib'

export const adminMiddleware = createMiddleware<ServerEnv>(async (c, next) => {
  const { user, token, session } = await getRequestData(c)

  if (!token) {
    return c.body(null, 401)
  }

  if (!session) {
    return rejectWithCookieDeletion(c)
  }

  if (session.frontend !== 'admin' || !user || user.role !== 'teacher') {
    return rejectWithSessionDeletion(c, session.id)
  }

  await prolongSessionIfNeeded(c, session, token)

  c.set('user', user)
  c.set('sessionId', session.id)

  return next()
})
