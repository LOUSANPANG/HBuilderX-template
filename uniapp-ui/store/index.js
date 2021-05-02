import Vue from 'vue'
import Vuex from 'vuex'
import Test from './test/test'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Test
  }
})

export default store