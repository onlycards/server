import { ServerContext } from '@/shared'

import { getEnterData, startSession } from './lib'

export const enterAdmin = async (c: ServerContext) => {
  const { user, isTeacher, isJsonCorrect } = await getEnterData(c)

  if (!isJsonCorrect) {
    return c.body(null, 400)
  }

  if (!user?.passwordMatch) {
    return c.body('Name and password do not match', 401)
  }

  if (!isTeacher) {
    return c.body('For teachers only', 403)
  }

  await startSession(c, user.id, true)

  return c.body(null, 204)
}
