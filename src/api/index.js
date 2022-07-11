// 当前模块进行API统一管理
import requests from "./request";
import mockRequest from "./mockRequest";

// 三级联动接口
// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({
  url: 'product/getBaseCategoryList',
  method: 'get'
})

// 获取banner（首页轮播图）
export const reqListContainer = () => mockRequest({
  url: 'banner',
  method: 'get'
})

// 获取floor数据
export const reqFloorList = () => mockRequest({
  url: 'floor',
  method: 'get'
})

// 获取search数据
export const reqSearchList = (pramas) => requests({
  url: '/list',
  method: 'post',
  data: pramas
})

// 获取Detail数据
export const reqDetailList = (skuId) => requests({
  url: `/item/${skuId}`,
  method: 'get',
})

// 传输购物车数据
export const reqAddOrUpdataCart = (skuId,skuNum) => requests({
  url: `/cart/addToCart/${skuId}/${skuNum}`,
  method: 'post'
})