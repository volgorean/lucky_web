import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from './util'

Vue.prototype.$s = store
Vue.prototype.$d = store.state
Vue.prototype.$api = "http://localhost:3000"
Vue.prototype.$util = util

window.$app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
