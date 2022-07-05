import {
  reqSearchList
} from "@/api"

const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, value) {
    state.searchList = value
  }
}
const actions = {
  async getSearchList({
    commit
  }, value = {}) {
    let res = await reqSearchList(value)
    if (res.code === 200) {
      commit('GETSEARCHLIST', res.data)
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