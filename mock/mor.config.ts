import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'ali',
    sourceType: 'alipay',
    target: 'alipay',
    cache: false,
    autoClean: true,
  },
])
