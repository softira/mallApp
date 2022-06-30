<template>
  <div>
    <h1>Search组件</h1>
    <p>{{$route.query.keyWord}}</p>
  </div>
</template>

<script>
export default {
  name:'Search',
  props:['keyWord']
}
</script>

<style>

</style>