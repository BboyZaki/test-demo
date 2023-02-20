module.exports = {
  documentSidebar: [
    {
      label: '指南',
      type: 'category',
      collapsed: false,
      items: [
        {
          label: '介绍',
          type: 'category',
          collapsed: true,
          items: ['guides/README', 'guides/introduction/how-mor-works']
        },
        {
          label: '教程',
          type: 'category',
          collapsed: true,
          items: [
            'guides/introduction/getting-started',
            {
              label: '开发一个 To-Do List',
              type: 'category',
              collapsed: true,
              items: [
                'guides/introduction/how-to-develop-todo-list_wechat',
                'guides/introduction/how-to-develop-todo-list'
              ]
            }
          ]
        },
        {
          label: 'MorJS 基础',
          type: 'category',
          collapsed: true,
          items: [
            'guides/basic/directory-structure',
            'guides/basic/config',
            'guides/basic/runtime',
            'guides/basic/plugin',
            'guides/basic/mock',
            'guides/basic/env-variables',
            'guides/basic/cli',
            'guides/faq'
          ]
        },
        {
          label: '条件编译',
          type: 'category',
          collapsed: true,
          items: [
            'guides/conditional-compile/code-level',
            'guides/conditional-compile/file-level'
          ]
        },
        {
          label: '多端兼容性',
          type: 'category',
          collapsed: true,
          items: [
            'guides/compatibilities/alipay-to-wechat',
            'guides/compatibilities/wechat-to-alipay'
          ]
        },
        {
          label: 'MorJS 进阶',
          type: 'category',
          collapsed: true,
          items: [
            'guides/advance/complex-miniprogram-integration',
            'guides/advance/unity-of-forms'
          ]
        },
        {
          label: '升级到 Mor',
          type: 'category',
          collapsed: true,
          items: ['guides/migrate-from-original-miniprogram-to-mor']
        },
        {
          label: '贡献',
          type: 'category',
          collapsed: true,
          items: ['guides/contributions/code', 'guides/contributions/document']
        }
      ]
    },
    {
      label: 'Web 开发',
      type: 'category',
      collapsed: false,
      items: [
        {
          label: '介绍',
          type: 'category',
          collapsed: true,
          items: ['web/basic/quickstart', 'web/basic/support']
        },
        {
          label: '基础使用',
          type: 'category',
          collapsed: true,
          items: ['web/introduction/basic', 'web/introduction/route']
        },
        {
          label: '其它用法',
          type: 'category',
          collapsed: true,
          items: ['web/support/custom-my', 'web/support/tabbar-support']
        }
      ]
    },
    {
      label: '规范',
      type: 'category',
      collapsed: false,
      items: [
        {
          label: '介绍',
          type: 'category',
          collapsed: true,
          items: ['specifications/README']
        },
        {
          label: '研发规范',
          type: 'category',
          collapsed: true,
          items: [
            'specifications/development',
            'specifications/code-styles',
            'specifications/git-commit-and-review'
          ]
        },
        {
          label: '技术规范',
          type: 'category',
          collapsed: true,
          items: [
            'specifications/js',
            'specifications/component',
            'specifications/runtime',
            'specifications/plugin'
          ]
        },
        {
          label: '文档规范',
          type: 'category',
          collapsed: true,
          items: ['specifications/document']
        }
      ]
    }
  ],
  apiSidebar: [
    {
      label: '介绍',
      type: 'category',
      collapsed: false,
      items: ['api/README']
    },
    {
      label: '工程 API',
      type: 'category',
      collapsed: false,
      items: [
        'api/engineering-hooks',
        'api/engineering-takin',
        'api/engineering-mor'
      ]
    },
    {
      label: '运行时 API',
      type: 'category',
      collapsed: false,
      items: ['api/runtime-core', 'api/runtime-hooks', 'api/runtime-api']
    },
    'api/takin'
  ],
  blogSidebar: [
    {
      label: 'Web 转端原理介绍',
      type: 'category',
      collapsed: false,
      items: [
        'web/blog/index',
        'web/blog/runtime',
        'web/blog/setdata',
        'web/blog/event',
        'web/blog/template',
        'web/blog/slot'
      ]
    },
    {
      label: 'MorJS 开发博客',
      type: 'category',
      collapsed: false,
      items: ['guides/advance/subpackage-volume-optimization']
    }
    // {
    //   label: 'MorJS 更新日志',
    //   type: 'category',
    //   collapsed: false,
    //   items: [
    //     'changelog/1.0.0',
    //   ]
    // }
  ]
}
