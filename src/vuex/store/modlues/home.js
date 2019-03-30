import {REQSHOPSDATA} from './mutations-types'
import {reqHomeData} from '../../../Api'
const state = {
  shopsData: {}
}
const actions = {
  async reqShopsData ({commit}) {
  //  发送异步请求
  let result  = await reqHomeData()
    console.log(result)
    if(result.code === 0){
      const data = result.data
      console.log(data)
      commit(REQSHOPSDATA,data)
    }
  }
}

const mutations = {
  [REQSHOPSDATA] (state,data) {
    console.log(state)
    state.shopsData = data
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

