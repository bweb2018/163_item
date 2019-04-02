import {REQCATEGORY} from './mutations-types'
import {reqCategory} from '../../../Api'
const state = {
  category: {}
}
const actions = {
  async reqCategory ({commit},fn) {
    //  发送异步请求
    let result  = await reqCategory()
    if(result.code === 0){
      const data = result.data
      commit(REQCATEGORY,data)
      typeof fn === 'function' && fn()
    }
  }

}

const mutations = {
  [REQCATEGORY] (state,data) {
    state.category = data
  }

}

const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}

