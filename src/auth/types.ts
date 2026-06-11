import { User } from '@/shared'
import { Session } from '@/model'

export type RequestData = {
  token?: string
  session?: Session
  user?: User | null
}
