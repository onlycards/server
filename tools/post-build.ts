import { readFileSync, copyFileSync, writeFileSync } from 'fs'

import { filename } from './filename.js'

const packageJson: { dependencies: Record<string, string> } = JSON.parse(
  readFileSync('package.json', 'utf8'),
)

writeFileSync(
  'dist/package.json',
  JSON.stringify({
    main: filename,
    dependencies: packageJson.dependencies,
  }),
)

copyFileSync('.env', 'dist/.env')
