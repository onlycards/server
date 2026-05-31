import { resolve } from 'path'

import { createJiti } from 'jiti'
import nodeExternals from 'webpack-node-externals'

const { filename } = await createJiti(import.meta.url).import<
  typeof import('./tools/filename')
>('./tools/filename')

export default {
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()],
  entry: resolve('src/main.ts'),
  resolve: { extensions: ['.ts'] },
  output: {
    filename,
    clean: true,
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
