import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
// 配置路由
export default [{
    name: 'Home',
    path: '/Home',
    component: Home,
    meta: {
      footerShow: true
    }
  },
  {
    name: 'Search',
    path: '/Search/:keyword?',
    component: Search,
    meta: {
      footerShow: true
    },
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login,
    meta: {
      footerShow: false
    }
  },
  {
    name: 'Register',
    path: '/Register',
    component: Register,
    meta: {
      footerShow: false
    }
  },
  {
    name: 'Detail',
    path: '/Detail/:skuId?',
    component: Detail,
    meta: {
      footerShow: true
    }
  },
  // 重定向，在项目跑起来的时候，访问/。立刻让他定向到首页
  {
    path: '*',
    redirect: '/Home'
  }
]