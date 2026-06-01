import { Hono } from 'hono'

import { adminRoutes } from './routes/admin'
import { clientRoutes } from './routes/client'
import { commonRoutes } from './routes/common'

export const createApp = () => {
  const app = new Hono()

  app.route('/admin', adminRoutes)
  app.route('/common', commonRoutes)
  app.route('/client', clientRoutes)
  app.notFound(c => c.body(null, 404))

  return app
}
