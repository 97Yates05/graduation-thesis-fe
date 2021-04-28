import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api': {
      'target': 'http://localhost:3000/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/home',
          microApp: 'home',
        },
        {
          path: '/admin',
          microApp: 'admin',
        },
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'home', // 唯一 id
          entry: '//localhost:7001', // html entry
        },
        {
          name: 'admin', // 唯一 id
          entry: '//localhost:8005', // html entry
        },
      ],
    },
  },
});
