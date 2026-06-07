import { sha256, QueryData } from '@/shared'

import { Session } from '../types'
import getSessionSql from './query.sql'

export const getSessionByToken = async (
  queryData: QueryData,
  token: string,
) => {
  const result = await queryData<Session>(getSessionSql, [sha256(token)])

  return result && result.length ? result[0] : null
}
