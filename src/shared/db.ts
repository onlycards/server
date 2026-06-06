import { Pool, createPool, ResultSetHeader } from 'mysql2/promise'

import { env } from './environment'

export const connectDb = () =>
  createPool({
    user: env.dbUser,
    port: env.dbPort,
    connectionLimit: 2,
    database: env.dbName,
    password: env.dbPassword,
  })

export const createQueryData =
  (pool: Pool) =>
  async <T>(sql: string, values: (string | number)[] = []): Promise<T[]> => {
    const [rows] = await pool.query(sql, values)

    return (Array.isArray(rows) ? rows : []) as T[]
  }

export const createQueryAction =
  (pool: Pool) =>
  async (
    sql: string,
    values: (string | number)[] = [],
  ): Promise<ResultSetHeader> => {
    const [result] = await pool.query(sql, values)

    return result as ResultSetHeader
  }
