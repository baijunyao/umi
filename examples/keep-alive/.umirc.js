export default {
  keepAlive: true,
  plugins: [
    [
      '../../packages/umi-plugin-react/lib/index.js',
      {
        antd: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: '默认标题',
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: './index',
    },
    {
      path: '/list',
      component: './list',
      keepAlive: true,
    },
    {
      path: '/test',
      component: './test',
    },
  ],
  exportStatic: true,
};