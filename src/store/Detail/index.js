import {
  reqDetailList,
  reqAddOrUpdataCart
} from '@/api'

const state = {
  detailList: {}
}
const mutations = {
  GETDETAIL(state, data) {
    state.detailList = data
  }
}
const actions = {
  async getDetail({
    commit
  }, skuId) {
    let res = await reqDetailList(skuId)
    if (res.code === 200) commit('GETDETAIL', res.data)
  },
  async addOrUpdataCart({
    commit
  }, {
    skuId,
    skuNum
  }) {
    let res = await reqAddOrUpdataCart(skuId, skuNum)
    if (res.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {
  categoryView(state) {
    return state.detailList.categoryView || {}
  },
  skuInfo(state) {
    return state.detailList.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.detailList.spuSaleAttrList || {}
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}