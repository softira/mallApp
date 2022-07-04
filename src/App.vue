<template>
  <div id="app">
    <Headers></Headers>
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <Footers v-show="$route.meta.footerShow"></Footers>
  </div>
</template>

<script>
import Headers from "./components/Header";
import Footers from "./components/Footer";

export default {
  name: "App",
  components: {
    Headers,
    Footers,
  },
  mounted() {
    // 组件挂载完毕，向服务器发送请求，获取数据存储在仓库中
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style>
</style>
