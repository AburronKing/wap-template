<!--
 * @Author: Hong Kai
 * @Date: 2020-12-23 15:06:56
 * @LastEditors: Hong Kai
 * @LastEditTime: 2020-12-23 16:27:04
 * @Description: * 头部导航组件
-->
<template>
  <div class="cvt-nav">
    <div class="back-btn" @click="handleBack">
      <van-icon name="arrow-left" />
    </div>
    <div class="headerName">{{ title }}</div>
    <!-- header的右侧操作slot -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CvtNav',
  props: {
    title: {
      type: String,
      default: '导航栏'
    },

  },
  methods: {
    handleBack() {
      this.$router.go(-1)
      // this.$emit('handler-back')
    }
  }
}
</script>

<style lang="less">
  .cvt-nav {
    position: relative;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    border-bottom: 1px solid #ebebeb;
    background-color: #fff;
    .back-btn {
      height: 100%;
      width: 46px;
      position: absolute;
      top: 0;
      left: 0;
      line-height: 48px;
      i {
        font-size: 24px;
        font-weight: bold;
        position: relative;
        top: 4px;
      }
    }
  }
</style>
