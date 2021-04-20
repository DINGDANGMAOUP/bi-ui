// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http'
import global from './utils/global'
import 'font-awesome/css/font-awesome.min.css'
import i18n from './i18n'
import store from './store'
// 全局引入mock
require('@/mock/index.js')
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(api)
Vue.prototype.global = global
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
