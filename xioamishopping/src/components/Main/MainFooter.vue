<template>
  <div class="mianfooter">
      <div class="top">
          <footer-top></footer-top>
      </div>
      <div class="bottom">
          <footer-bottom></footer-bottom>
      </div>
  </div>
</template>
<script>
import FooterTop from './Footer/FooterTop.vue'
import FooterBottom from './Footer/FooterBottom'
export default {
  components: {
    FooterTop,
    FooterBottom
  }
}
</script>
<style lang="less" scoped>
.mianfooter{
    height: 100%;
    width: 100%;
    .top{
        height: 372px;
        width: 100%;
        background: #fff;
    }
    .bottom{
        width: 100%;
        height: calc(100% - 372px);
        background: #fafafa;
    }
}
</style>
