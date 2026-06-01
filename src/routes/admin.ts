import { Hono } from 'hono'

export const adminRoutes = new Hono()

// Все данные панели администратора одним запросом.
adminRoutes.get('/data', c => c.json(null))

// Принимаем имя и пароль из тела запроса.
// Найденный по имени пользователь обязан иметь роль преподавателя.
// При успешной проверке устанавливаем HttpOnly Cookie с токеном авторизации.
adminRoutes.post('/enter', c => c.body(null, 401))

// Подробная информация о группе по ID из query-параметра.
adminRoutes.get('/group', c => c.json(null))

// Принимаем название и описание группы из тела запроса.
adminRoutes.post('/create-group', c => c.body(null, 401))

// Принимаем ID группы из query-параметра и новые данные из тела запроса.
adminRoutes.post('/update-group', c => c.body(null, 401))

// Принимаем ID группы из query-параметра.
adminRoutes.post('/delete-group', c => c.body(null, 401))

// Принимаем ID группы и ID пользователя из query-параметров.
adminRoutes.post('/invite-user', c => c.body(null, 401))

// Принимаем ID группы и ID пользователя из query-параметров.
adminRoutes.post('/revoke-invitation', c => c.body(null, 401))

// Принимаем ID группы и ID пользователя из query-параметров.
adminRoutes.post('/remove-user-from-group', c => c.body(null, 401))

// Список колод преподавателя.
adminRoutes.get('/decks', c => c.json(null))

// Подробная информация о колоде по ID из query-параметра.
adminRoutes.get('/deck', c => c.json(null))

// Принимаем данные колоды из тела запроса.
adminRoutes.post('/create-deck', c => c.body(null, 401))

// Принимаем ID колоды из query-параметра и новые данные из тела запроса.
adminRoutes.post('/update-deck', c => c.body(null, 401))

// Принимаем ID колоды из query-параметра.
adminRoutes.post('/delete-deck', c => c.body(null, 401))

// Принимаем ID колоды и ID группы из query-параметров.
adminRoutes.post('/link-deck', c => c.body(null, 401))

// Принимаем ID колоды и ID группы из query-параметров.
adminRoutes.post('/unlink-deck', c => c.body(null, 401))

// Принимаем ID колоды из query-параметра и данные карты из тела запроса.
adminRoutes.post('/create-card', c => c.body(null, 401))

// Принимаем ID карты из query-параметра и новые данные из тела запроса.
adminRoutes.post('/update-card', c => c.body(null, 401))

// Принимаем ID карты из query-параметра.
adminRoutes.post('/delete-card', c => c.body(null, 401))
