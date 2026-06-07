import { Hono } from 'hono'

import { ServerEnv } from './types'

export const createRouter = () => new Hono<ServerEnv>()
