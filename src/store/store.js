import Vue from 'vue'
import Vuex from 'vuex'

import quiz from './modules/quiz'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    quiz
  }
})
