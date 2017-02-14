export default [
  {
    path: '/',
    name: 'index',
    redirect: '/components/test'
  },
  {
    path: '/components',
    component: require('./views/components.vue'),
    children: [
      {
        path: 'test',
        name: 'test',
        component: require('./docs/zh-cn/test.md')
      },
      {
        path: 'message',
        name: 'message',
        component: require('../zcy/components/message/demo.md')
      }
    ]
  }
]