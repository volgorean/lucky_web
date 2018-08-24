import Vue from 'vue'
import Vuex from 'vuex'
import util from './util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: util.local("user", false),
  },
  mutations: {
    login (state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    logout (state) {
      localStorage.removeItem('user')
      state.user = null
    }
  }
})