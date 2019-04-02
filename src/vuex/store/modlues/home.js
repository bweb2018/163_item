import {REQSHOPSDATA,REQWANGDATA,SETINDEX} from './mutations-types'
import {reqHomeData,reqWangData} from '../../../Api'
const state = {
  shopsData: {},
  wangData: {},
  index: 0
}
const actions = {
  async reqShopsData ({commit},fn) {
  //  发送异步请求
  let result  = await reqHomeData()
    if(result.code === 0){
      const data = result.data
      commit(REQSHOPSDATA,data)
      typeof fn === 'function' && fn()
    }
  },

  async reqWangData ({commit},fn) {
    //  发送异步请求
    let result  = await reqWangData()
    if(result.code === 0){
      const data = result.data
      commit(REQWANGDATA,data)
      typeof fn === 'function' && fn()
    }
  },
  setIndex ({commit},index) {
      commit(SETINDEX,index)
    }

}

const mutations = {
  [REQSHOPSDATA] (state,data) {
    state.shopsData = data
  },
  [REQWANGDATA] (state,data) {
    state.wangData = data
  },
  [SETINDEX] (state,index) {
    state.index = index
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

