import { QueryAction } from '@/shared'

import deleteInvitationSql from './query.sql'

export const deleteInvitationById = (queryAction: QueryAction, id: number) =>
  queryAction(deleteInvitationSql, [id])
