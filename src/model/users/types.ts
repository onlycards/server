export type User = {
  id: number
  name: string
  passwordHash: string
  role: 'teacher' | 'student'
}
