<template>
<!-- 底部弹出的选项菜单 -->
  <div class="cvt-popup">
    <van-popup :value="show" v-bind="$attrs" :close-on-click-overlay="false">
      <slot></slot>
      <div class="cvt-popup-item cancel" @click="cancel">取消</div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: 'CvtPopup',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cancel() {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="less">
  .cvt-popup-item {
    line-height: 50px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    border-top: 1px solid #ebebeb;
    &.cancel {
      border-top: 8px solid #f7fafb;
    }
  }
</style>
