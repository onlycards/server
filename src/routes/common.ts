import { Hono } from 'hono'

export const commonRoutes = new Hono()

// Удаляем HttpOnly Cookie с токеном авторизации.
commonRoutes.post('/exit', c => c.body(null, 401))

// Принимаем новый пароль из тела запроса и перезаписываем в БД.
commonRoutes.post('/change-password', c => c.body(null, 401))
