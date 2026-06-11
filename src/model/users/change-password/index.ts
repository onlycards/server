import { QueryAction, hashUserPassword } from '@/shared'

import changePasswordSql from './query.sql'

export const changePasswordById = (
  queryAction: QueryAction,
  userId: number,
  password: string,
) =>
  queryAction(changePasswordSql, [hashUserPassword(userId, password), userId])
