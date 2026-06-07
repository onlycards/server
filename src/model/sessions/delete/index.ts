import { QueryAction } from '@/shared'

import deleteSessionSql from './query.sql'

export const deleteSessionById = (queryAction: QueryAction, id: number) =>
  queryAction(deleteSessionSql, [id])
