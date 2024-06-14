import { defineConfig } from 'father';
const path = require('path');

export default defineConfig({
  /* esm: {
     transformer: 'babel',
     // output: 'dist'
   },*/
  cjs: {
    transformer: 'babel',
    output: 'dist'
    },
  // umd: {},
  alias: {
    '@': path.resolve(__dirname, './src'),
    'hello-a': path.resolve(__dirname, './src/a.tsx'),
    'hello-foo': path.resolve(__dirname, './src/foo.ts'),
  },
  platform: 'browser',
});
