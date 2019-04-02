import Vue from 'vue'
import Vuex from 'vuex'

import home from './modlues/home'
import category from './modlues/category'
import search from './modlues/search'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    category,
    search
  }
})
