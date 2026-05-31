import { Hono } from 'hono'

export const adminRoutes = new Hono()

adminRoutes.all('*', c => c.body(null, 404))
