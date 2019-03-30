// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import store from './vuex/store'
import './mock/morkServer'
// 全局头部（二部分）
import Header from './components/Header/Header.vue'
Vue.config.productionTip = false
Vue.component('Header',Header) //注册全局组件
Vue.use(Header) //生明使用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
