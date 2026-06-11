import { createMiddleware } from 'hono/factory'

import { ServerEnv } from '@/shared'

import { getRequestData, rejectWithSessionDeletion } from './lib'

export const enterMiddleware = createMiddleware<ServerEnv>(async (c, next) => {
  const { session } = await getRequestData(c)

  return session ? rejectWithSessionDeletion(c, session.id, 403) : next()
})
