import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'wx',
    sourceType: 'alipay',
    target: 'wechat',
    cache: false,
    autoClean: true,
  },
  {
    name: 'ali',
    sourceType: 'alipay',
    target: 'alipay',
    cache: false,
    autoClean: true,
  },
  {
    name: 'web',
    sourceType: 'alipay',
    target: 'web',
    web: {
      emitIntermediateAssets: true,
      responsiveRootFontSize: 16,
      showHeader: true
    }
  }
])
