import { PasswordChange } from './types'

export const isPasswordChange = (value: unknown): value is PasswordChange =>
  value !== null &&
  typeof value === 'object' &&
  'oldPassword' in value &&
  'newPassword' in value &&
  typeof value.oldPassword === 'string' &&
  typeof value.newPassword === 'string'
