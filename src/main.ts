import { serve } from '@hono/node-server'

import { env } from '@/shared'
import { createApp } from '@/app'

const app = createApp()

serve(
  {
    fetch: app.fetch,
    port: env.serverPort,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)
