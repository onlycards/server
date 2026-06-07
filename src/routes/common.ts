import { createRouter } from '@/shared'

export const commonRoutes = createRouter()

// Удаляем HttpOnly Cookie с токеном авторизации.
commonRoutes.post('/exit', c => c.body(null, 401))

// Принимаем новый пароль из тела запроса и перезаписываем в БД.
commonRoutes.post('/change-password', c => c.body(null, 401))
