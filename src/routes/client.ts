import { Hono } from 'hono'

export const clientRoutes = new Hono()

clientRoutes.get('/data', c => c.json(null))
clientRoutes.post('/exit', c => c.body(null, 401))
clientRoutes.post('/enter', c => c.body(null, 401))
clientRoutes.post('/change-password', c => c.body(null, 401))
