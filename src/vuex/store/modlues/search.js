import {SEARCHSHOPDATA} from './mutations-types'
import {reqSearchData} from '../../../Api'
const state = {
  backSearchData: []
}
const actions = {
  async searchData ({commit},{sendInfo,fn}) {
    //  发送异步请求
    let result  = await reqSearchData(sendInfo)
    if(result.code === "200"){
      const data = result.data
      commit(SEARCHSHOPDATA,data)
      typeof fn === 'function' && fn(data)
    }
  }

}

const mutations = {
  [SEARCHSHOPDATA] (state,data) {
    state.backSearchData = data
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

