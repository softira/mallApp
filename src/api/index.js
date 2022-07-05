// 当前模块进行API统一管理
import requests from "./request";
import mockRequest from "./mockRequest";

// 三级联动接口
// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({url:'product/getBaseCategoryList',method:'get'})

export const reqListContainer = () => mockRequest({url:'banner',method:'get'})