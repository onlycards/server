import { QueryData } from '@/shared'

import { User } from '../types'
import getUserByNameSql from './query.sql'

export const getUserByName = async (queryData: QueryData, name: string) => {
  const result = await queryData<User>(getUserByNameSql, [name])

  return result && result.length ? result[0] : null
}
