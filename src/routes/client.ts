import { createRouter } from '@/shared'

export const clientRoutes = createRouter()

// Все данные клиента одним запросом.
clientRoutes.get('/data', c => c.json(null))

// Принимаем ID группы из query-параметра.
clientRoutes.post('/accept-invitation', c => c.body(null, 403))

// Принимаем ID группы из query-параметра.
clientRoutes.post('/decline-invitation', c => c.body(null, 403))

// Принимаем ID группы из query-параметра.
clientRoutes.post('/leave-group', c => c.body(null, 403))
