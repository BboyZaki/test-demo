import { defineConfig } from '@ali/mor-cli'

export default defineConfig([
  {
    name: 'ali',
    sourceType: 'alipay',
    target: 'alipay',
    cache: false,
    autoClean: true,
  },
])
