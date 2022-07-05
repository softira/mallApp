import { reqCategoryList,reqListContainer,reqFloorList } from "@/api"

const state = {
  // 三级导航数据
  categoryList:[],
  // banner轮播数据
  listContainer:[],
  // floor组件的数据
  floorList:[]
}
const mutations = {
  GETCATEGORYLIST(state,value){
    state.categoryList = value
  },
  GETLISTCONTAINER(state,value){
    state.listContainer = value
  },
  GETFLOORLIST(state,value){
    state.floorList = value
  }
}
const actions = {
  // 通过API里面的接口函数调用，向服务器请求数据
  // 获取三级导航数据
  async getCategoryList({commit}){
    let res = await reqCategoryList() 
    if(res.code === 200){
      commit('GETCATEGORYLIST',res.data)
    }
  },
  // 获取首页轮播图数据
  async getListContainer({commit}){
    let res = await reqListContainer() 
    if(res.code === 200){
      commit('GETLISTCONTAINER',res.data)
    }
  },
  // 获取floor数据
  async getFloorList({commit}){
    let res = await reqFloorList() 
    if(res.code === 200){
      commit('GETFLOORLIST',res.data)
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