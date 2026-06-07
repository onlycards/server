export type Credentials = {
  name: string
  password: string
}

export type EnterData = {
  isTeacher?: boolean
  isJsonCorrect?: boolean
  user?: {
    id: number
    passwordMatch: boolean
  }
}
