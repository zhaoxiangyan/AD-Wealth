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
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/Login.vue'], resolve)
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
    }
  ]
})
