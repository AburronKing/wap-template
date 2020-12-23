<!--
 * @Author: Hong Kai
 * @Date: 2020-03-20 16:17:23
 * @LastEditors: Hong Kai
 * @LastEditTime: 2020-12-23 17:06:03
 * @Description: * 
-->
<template>
  <div id="app" data-theme="blue">
    <!-- 路由设置meta对象的keepAlive为true时，保存状态 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.setSkin();
  },
  methods: {
    // 通过设置data-theme 来进行换肤操作
    setSkin() {
      this.$nextTick(() => {
        const app = document.querySelector('#app');
        app.dataset.theme = 'yellow';
      });
      
    }
  }
};
</script>

<style>
#app {
  overflow: hidden;
  height: 100vh;
}
</style>
