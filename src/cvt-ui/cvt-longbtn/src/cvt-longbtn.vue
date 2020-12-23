/*
  长条提交类型的按钮
  一般是放在页面底部fixed的按钮
  */
<template>
  <div class="cvt-submit-button">
    <slot></slot>
    <van-button v-bind="$attrs" :native-type="nativeType" :type="type" block>{{ name }}</van-button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '按钮'
    },
    type: {
      type: String,
      default: 'info'
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="less">
.cvt-submit-button {
  padding: 12px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #ebebeb;
  display: flex;
  .van-button {
    font-size: 18px;
    & + .van-button {
      margin-left: 10px;
    }
  }
}
</style>
