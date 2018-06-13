import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // 打包上线之前要取消html5的history模式或者后端进行相应配置
  routes: [
    {
      path: '*',
      component: resolve => require(['../components/Notfound.vue'], resolve)
    },
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../components/index.vue'], resolve)
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: resolve => require(['../components/log-in.vue'], resolve)
    },
    {
      path: '/forgotten-password',
      name: 'forgotten-password',
      component: resolve => require(['../components/forgotten-password.vue'], resolve)
    },
    {
      path: '/invest-now',
      name: 'invest-now',
      component: resolve => require(['../components/invest-now.vue'], resolve)
    },
    // 文档
    {
      path: '/AD-Wealth-Online-T&C-180605',
      name: 'ad-wealth-online',
      component: resolve => require(['../components/document/ad-wealth-online.vue'], resolve)
    },
    {
      path: '/AD-Wealth-Unit-Trust-T&C-180607',
      name: 'ad-wealth-unit-trust',
      component: resolve => require(['../components/document/ad-wealth-unit-trust.vue'], resolve)
    },
    {
      path: '/Client-Complaint-Process-180605',
      name: 'client-complaint-process',
      component: resolve => require(['../components/document/client-complaint-process.vue'], resolve)
    },
    {
      path: '/Privacy-and-Security-Policy-180608',
      name: 'privacy-and-security-policy',
      component: resolve => require(['../components/document/privacy-and-security-policy.vue'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['../components/Register.vue'], resolve)
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: resolve => require(['../components/Contact-us.vue'], resolve)
    },
    {
      path: '/fund-pages/balanced-fund',
      name: 'balanced-fund',
      component: resolve => require(['../components/fund-pages/Balanced-fund.vue'], resolve)
    },
    {
      path: '/fund-pages/equity-fund',
      name: 'equity-fund',
      component: resolve => require(['../components/fund-pages/Equity-fund.vue'], resolve)
    },
    {
      path: '/fund-pages/stable-fund',
      name: 'stable-fund',
      component: resolve => require(['../components/fund-pages/Stable-fund.vue'], resolve)
    },
    // 管理员页面
    {
      path: '/admin',
      redirect: '/admin/home'
    },
    {
      path: '/admin/home',
      component: resolve => require(['../components/admin/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/admin/Pageone.vue'], resolve)
        }
      ]
    },
    // 用户页面
    {
      path: '/user',
      redirect: '/user/home'
    },
    {
      path: '/user/home',
      component: resolve => require(['../components/user/user.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/user/one.vue'], resolve)
        },
        {
          path: '/user/account',
          name: 'account',
          component: resolve => require(['../components/user/account.vue'], resolve)
        }
      ]
    }
  ]
})
