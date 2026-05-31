import 'dotenv/config'
import { serve } from '@hono/node-server'

import { createApp } from './app'

const app = createApp()
const port = Number(process.env.SERVER_EXTERNAL_PORT ?? 3000)

serve(
  {
    port,
    fetch: app.fetch,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)
