import { sha256, QueryAction } from '@/shared'

import createSessionSql from './query.sql'

export const createSession = (
  queryAction: QueryAction,
  userId: number,
  token: string,
  expiresAt: Date,
  isAdmin: boolean,
) =>
  queryAction(createSessionSql, [
    userId,
    isAdmin ? 'admin' : 'client',
    sha256(token),
    expiresAt,
  ])
