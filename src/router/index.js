import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(VueRouter)

// 获取原型对象的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err=>err)
}
const originalReplace = VueRouter.prototype.replace
// 修改原型对象中的push方法
VueRouter.prototype.replace = function push(location){
  return originalReplace.call(this, location).catch(err=>err)
}

export default new VueRouter({
  routes:[
    {
      name: 'Home',
      path:'/Home',
      component:Home,
      meta:{
        footerShow:true
      }
    },
    {
      name: 'Search',
      path:'/Search/:keyWord',
      component:Search,
      meta:{
        footerShow:true
      }
    },
    {
      name: 'Login',
      path:'/Login',
      component:Login,
      meta:{
        footerShow:false
      }
    },
    {
      name: 'Register',
      path:'/Register',
      component:Register,
      meta:{
        footerShow:false
      }
    },
    // 重定向，在项目跑起来的时候，访问/。立刻让他定向到首页
    {
      path:'*',
      redirect:'/Home'
    }
  ]
})
