import { Context } from 'hono'
import { ResultSetHeader } from 'mysql2/promise'

export type User = {
  id: number
  name: string
  passwordHash: string
  role: 'teacher' | 'student'
}

export type QueryData = <T>(
  sql: string,
  values?: (string | number | Date)[],
) => Promise<T[] | null>

export type QueryAction = (
  sql: string,
  values?: (string | number | Date)[],
) => Promise<ResultSetHeader>

export type ServerEnv = {
  Variables: {
    user: User
    sessionId: number
    queryData: QueryData
    queryAction: QueryAction
  }
}

export type ServerContext = Context<ServerEnv>
