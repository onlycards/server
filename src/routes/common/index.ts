import { createRouter } from '@/shared'

import { exit } from './exit'
import { changePassword } from './change-password'

export const commonRoutes = createRouter()

commonRoutes.post('/exit', exit)
commonRoutes.post('/change-password', changePassword)
