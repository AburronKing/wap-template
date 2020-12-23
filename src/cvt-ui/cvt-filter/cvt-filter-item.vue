<!--
 * @Author: Hong Kai
 * @Date: 2020-12-23 15:06:56
 * @LastEditors: Hong Kai
 * @LastEditTime: 2020-12-23 16:03:44
 * @Description: * 
-->
<template>
  <div class="cvt-filter-item" @click="handleClick">
    <!-- 通过slot传入的内容 没有下箭头 -->
    <div :class="{noArrow: !name}">
      {{ name }}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      // 有传入filter name的才响应点击事件
      // 否则是通过slot的独立组件
      if (!this.name) return
      // emit其filter的name到组件装载处
      this.$parent.$emit('handle-click', this.name)
    }
  }
}
</script>

<style lang="less">
  .cvt-filter-item {
    flex: 1;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
    color: #323233;
    >div::after {
      content: '';
      display: inline-block;
      border: 4px solid;
      border-color: transparent transparent #bfbfbf #bfbfbf;
      transform: rotate(-45deg);
      position: relative;
      left: 8px;
      top: -3px;
    }
    >div.noArrow {
      &::after {
        display: none;
      }
    }
    .options {
      height: 44px;
      .van-dropdown-menu {
        &__title::after {
          border: 4px solid;
          border-color: transparent transparent #bfbfbf #bfbfbf;
          top: 40%;
          right: -8px;
        }
        &__bar {
          height: 44px;
          box-shadow: none;
        }
      }
      &.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
        border: none;
      }
    }
  }
</style>
