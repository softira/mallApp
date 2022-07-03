import { reqCategoryList } from "@/api"

const state = {
  categoryList:[]
}
const mutations = {
  GETCATEGORYLIST(state,value){
    state.categoryList = value
  }
}
const actions = {
  // 通过API里面的接口函数调用，向服务器请求数据
  async getCategoryList({commit}){
    let res = await reqCategoryList() 
    if(res.code === 200){
      commit('GETCATEGORYLIST',res.data)
    }
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}