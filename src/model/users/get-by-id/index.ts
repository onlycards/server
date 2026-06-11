import { User, QueryData } from '@/shared'

import getUserByIdSql from './query.sql'

export const getUserById = async (queryData: QueryData, id: number) => {
  const result = await queryData<User>(getUserByIdSql, [id])

  return result && result.length ? result[0] : null
}
