import { ServerContext } from '@/shared'

// Принимаем ID группы из query-параметра.
export const leaveGroup = (c: ServerContext) => c.body(null, 501)
