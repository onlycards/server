export type Session = {
  id: number
  userId: number
  expiresAt: Date
  frontend: 'client' | 'admin'
}
