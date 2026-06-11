import { ServerContext } from '@/shared'

export const getData = (c: ServerContext) => c.json(null)
