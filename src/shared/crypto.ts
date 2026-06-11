import { createHash, randomBytes } from 'crypto'

export const sha256 = (input: string) =>
  createHash('sha256').update(Buffer.from(input)).digest('hex')

export const hashUserPassword = (userId: number, password: string) =>
  sha256(`${userId}/${password}`)

export const randomToken = () => randomBytes(32).toString('base64url')
