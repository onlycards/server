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
  output: {
    filename,
    clean: true,
    path: resolve('dist'),
  },
  resolve: {
    extensions: ['.ts'],
    alias: { '@': resolve('src') },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.sql$/,
        type: 'asset/source',
      },
    ],
  },
}
