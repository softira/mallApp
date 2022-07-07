import Vue from 'vue'
import App from './App.vue'

// 三级联动组件---全局组件
import TypeNav from './components/TypeNav'
// 第一个参数：全局组件的名字；第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
// 轮播组件
import Carousel from './components/Carousel'
Vue.component(Carousel.name, Carousel)

// 关闭生产提示
Vue.config.productionTip = false

// 引入路由
import router from './router'
// 引入仓库
import store from './store'

// 引入MockServer.js
import './mock/mockServe';
// 引入swiper样式
import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  // 配置路由
  router,
  // 注册仓库
  store,
  beforeCreate(){
    Vue.prototype.$bus = this // 安装全局事件总线
  }
}).$mount('#app')