import { changePasswordById, deleteOtherSessions } from '@/model'
import { ServerContext, parseJsonBody, hashUserPassword } from '@/shared'

import { isPasswordChange } from './lib'

export const changePassword = async (c: ServerContext) => {
  const body = await parseJsonBody(c, isPasswordChange)

  if (!body) {
    return c.body(null, 400)
  }

  const user = c.get('user')
  const { oldPassword, newPassword } = body

  if (hashUserPassword(user.id, oldPassword) !== user.passwordHash) {
    return c.body('Old password is incorrect', 403)
  }

  if (newPassword.length < 8) {
    return c.body('New password is too short', 403)
  }

  const sessionId = c.get('sessionId')
  const queryAction = c.get('queryAction')

  await Promise.all([
    deleteOtherSessions(queryAction, user.id, sessionId),
    changePasswordById(queryAction, user.id, newPassword),
  ])

  return c.body(null, 204)
}
