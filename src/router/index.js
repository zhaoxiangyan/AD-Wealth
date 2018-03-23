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
    }
  ]
})
