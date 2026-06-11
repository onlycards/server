import { adminMiddleware, enterMiddleware, commonMiddleware } from '@/auth'
import { adminRoutes, enterRoutes, clientRoutes, commonRoutes } from '@/routes'
import {
  connectDb,
  createRouter,
  createQueryData,
  createQueryAction,
} from '@/shared'

export const createApp = () => {
  const db = connectDb()

  return createRouter()
    .use('*', (c, next) => {
      c.set('queryData', createQueryData(db))
      c.set('queryAction', createQueryAction(db))

      return next()
    })
    .use('/enter/*', enterMiddleware)
    .use('/admin/*', adminMiddleware)
    .use('/client/*', commonMiddleware)
    .use('/common/*', commonMiddleware)
    .route('/enter', enterRoutes)
    .route('/admin', adminRoutes)
    .route('/common', commonRoutes)
    .route('/client', clientRoutes)
    .notFound(c => c.body(null, 404))
}
