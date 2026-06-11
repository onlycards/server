import { ServerContext } from '@/shared'

import { getEnterData, startSession } from './lib'

export const enterClient = async (c: ServerContext) => {
  const { user, isJsonCorrect } = await getEnterData(c)

  if (!isJsonCorrect) {
    return c.body(null, 400)
  }

  if (!user?.passwordMatch) {
    return c.body('Name and password do not match', 401)
  }

  await startSession(c, user.id, false)

  return c.body(null, 204)
}
