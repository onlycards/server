import { getUserByName } from '@/model'
import { createRouter } from '@/shared'

export const clientRoutes = createRouter()

// Все данные клиента одним запросом.
clientRoutes.get('/data', c => c.json(null))

// Принимаем имя и пароль из тела запроса.
// При успешной проверке устанавливаем HttpOnly Cookie с токеном авторизации.
clientRoutes.post('/enter', async c => {
  const user = await getUserByName(c.get('queryData'), 'nelkor')

  console.log('User')
  console.log(user)

  return c.body(null, 401)
})

// Принимаем ID группы из query-параметра.
clientRoutes.post('/accept-invitation', c => c.body(null, 401))

// Принимаем ID группы из query-параметра.
clientRoutes.post('/decline-invitation', c => c.body(null, 401))

// Принимаем ID группы из query-параметра.
clientRoutes.post('/leave-group', c => c.body(null, 401))
