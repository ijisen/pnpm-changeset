import { defineConfig } from 'father';
const path = require('path');

export default defineConfig({
  esm: {
    output: 'dist'
  },
  // cjs: {},
  // umd: {},
  alias: {
    '@': path.resolve(__dirname, './src'),
    'hello-a': path.resolve(__dirname, './src/a.tsx'),
    'hello-foo': path.resolve(__dirname, './src/foo.ts'),
  },
  platform: 'browser',
});
