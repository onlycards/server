import { adminRoutes, clientRoutes, commonRoutes } from '@/routes'
import {
  connectDb,
  createRouter,
  createQueryData,
  createQueryAction,
} from '@/shared'

export const createApp = () => {
  const db = connectDb()
  const app = createRouter()

  app.use('*', (c, next) => {
    c.set('queryData', createQueryData(db))
    c.set('queryAction', createQueryAction(db))

    return next()
  })

  app.route('/admin', adminRoutes)
  app.route('/common', commonRoutes)
  app.route('/client', clientRoutes)
  app.notFound(c => c.body(null, 404))

  return app
}
