import { QueryAction } from '@/shared'

import deleteMembershipSql from './query.sql'

export const deleteMembershipById = (queryAction: QueryAction, id: number) =>
  queryAction(deleteMembershipSql, [id])
