// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'
import 'animate.css/animate.css'
import '../src/components/style/clear.css' //  样式重置
import axios from 'axios'

Vue.use(iView, {locale})
Vue.config.productionTip = false
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'https://192.168.0.145'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
