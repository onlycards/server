import { createRouter } from '@/shared'

import { getData } from './get-data'
import { leaveGroup } from './leave-group'
import { handleInvitation } from './handle-invitation'

export const clientRoutes = createRouter()

clientRoutes.get('/data', getData)
clientRoutes.post('/leave-group', leaveGroup)
clientRoutes.post('/handle-invitation', handleInvitation)
