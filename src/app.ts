import { Hono } from 'hono'

import { adminRoutes } from './routes/admin'
import { clientRoutes } from './routes/client'

export const createApp = () => {
  const app = new Hono()

  app.route('/client', clientRoutes)
  app.route('/admin', adminRoutes)
  app.notFound(c => c.body(null, 404))

  return app
}
