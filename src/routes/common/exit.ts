import { deleteCookie } from 'hono/cookie'

import { deleteSessionById } from '@/model'
import { ServerContext, ACCESS_TOKEN_COOKIE } from '@/shared'

export const exit = async (c: ServerContext) => {
  await deleteSessionById(c.get('queryAction'), c.get('sessionId'))

  deleteCookie(c, ACCESS_TOKEN_COOKIE)

  return c.body(null, 204)
}
