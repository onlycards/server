import { QueryAction } from '@/shared'

import deleteOtherSessionsSql from './query.sql'

export const deleteOtherSessions = (
  queryAction: QueryAction,
  userId: number,
  sessionId: number,
) => queryAction(deleteOtherSessionsSql, [userId, sessionId])
