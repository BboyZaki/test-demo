import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'wx',
    sourceType: 'wechat',
    target: 'wechat',
    cache: false,
    autoClean: true,
  },
  {
    name: 'ali',
    sourceType: 'wechat',
    target: 'alipay',
    cache: false,
    autoClean: true,
  },
  {
    name: 'web',
    sourceType: 'wechat',
    target: 'web',
    web: {
      emitIntermediateAssets: true,
      responsiveRootFontSize: 16,
      showHeader: true
    }
  }
])
