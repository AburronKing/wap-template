<template>
  <div id="app">
    <!-- 路由设置meta对象的keepAlive为true时，保存状态 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  overflow: hidden;
}
</style>
