import { Context } from 'hono'

export const parseJsonBody = <T>(
  c: Context,
  isT: (value: unknown) => value is T,
) =>
  c.req
    .json()
    .then(result => (isT(result) ? result : null))
    .catch(() => null)
