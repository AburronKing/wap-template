<!--
 * @Author: Hong Kai
 * @Date: 2020-12-23 15:45:04
 * @LastEditors: Hong Kai
 * @LastEditTime: 2020-12-23 16:30:58
 * @Description: * 
-->
<template>
  <div class="home">
    这是首页
    <van-button type="info" block @click="toPage">跳转至page页</van-button>
  </div>
</template>
<script>
export default {
  name: "home",
  props: {

  },
  methods: {
    toPage() {
      this.$router.push('page')
    }
  }
};
</script>

<style lang="less">
  .home {
    height: 100%;
    padding: 12px;
  }
</style>
