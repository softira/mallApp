import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由
import router from './router'

new Vue({
  render: h => h(App),
  // 配置路由
  router
}).$mount('#app')
