import { ResultSetHeader } from 'mysql2/promise'

export type QueryData = <T>(
  sql: string,
  values?: (string | number)[],
) => Promise<T[] | null>

export type QueryAction = (
  sql: string,
  values?: (string | number)[],
) => Promise<ResultSetHeader>
