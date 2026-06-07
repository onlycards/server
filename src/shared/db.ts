import { Pool, createPool, ResultSetHeader } from 'mysql2/promise'

import { env } from './environment'
import { QueryData, QueryAction } from './types'

export const connectDb = () =>
  createPool({
    user: env.dbUser,
    port: env.dbPort,
    connectionLimit: 2,
    database: env.dbName,
    password: env.dbPassword,
  })

export const createQueryData =
  (pool: Pool): QueryData =>
  async <T>(
    sql: string,
    values: (string | number | Date)[] = [],
  ): Promise<T[]> => {
    const [rows] = await pool.query(sql, values)

    return (Array.isArray(rows) ? rows : []) as T[]
  }

export const createQueryAction =
  (pool: Pool): QueryAction =>
  async (
    sql: string,
    values: (string | number | Date)[] = [],
  ): Promise<ResultSetHeader> => {
    const [result] = await pool.query(sql, values)

    return result as ResultSetHeader
  }
