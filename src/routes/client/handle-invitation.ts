import { ServerContext } from '@/shared'

// Принимаем ID группы и решение пользователя из body.
export const handleInvitation = (c: ServerContext) => c.body(null, 501)
