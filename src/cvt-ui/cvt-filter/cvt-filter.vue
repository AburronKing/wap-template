/*
  filter组件的slot
*/
<script>
export default {
  render(h) {
    return (
      <div class='cvt-filter'>
        {this.$slots.default}
      </div>
    )
  }

}
</script>

<style lang="less">
  .cvt-filter {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
  }
</style>
