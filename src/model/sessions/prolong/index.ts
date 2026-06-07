import { QueryAction } from '@/shared'

import prolongSessionSql from './query.sql'

export const prolongSessionById = (
  queryAction: QueryAction,
  id: number,
  expiresAt: Date,
) => queryAction(prolongSessionSql, [expiresAt, id])
