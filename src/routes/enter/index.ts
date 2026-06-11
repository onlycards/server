import { createRouter } from '@/shared'

import { enterAdmin } from './admin'
import { enterClient } from './client'

export const enterRoutes = createRouter()

enterRoutes.post('/admin', enterAdmin)
enterRoutes.post('/client', enterClient)
