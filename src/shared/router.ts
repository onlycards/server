import { Hono } from 'hono'

import { QueryData, QueryAction } from './types'

export const createRouter = () =>
  new Hono<{
    Variables: {
      queryData: QueryData
      queryAction: QueryAction
    }
  }>()
