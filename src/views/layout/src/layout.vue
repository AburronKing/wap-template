<!--
 * @Author: Hong Kai
 * @Date: 2020-12-23 15:58:54
 * @LastEditors: Hong Kai
 * @LastEditTime: 2020-12-23 16:24:53
 * @Description: * 
-->
<template>
  <div class="layout">
    <van-sticky>
      <Nav></Nav>
    </van-sticky>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from '@/cvt-ui/cvt-nav';
export default {
  name: "layout",
  components: {
    Nav
  },
  props: {

  },
  methods: {

  }
};
</script>

<style lang="less">
  .layout {
    height: 100%;
    overflow-y: auto;
    background-color: #f5f5f5;
  }
</style>
