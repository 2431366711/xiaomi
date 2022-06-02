<template>
  <div class="maincontent">
      <div class="title">
          <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2a3468c474addf9140a21cc77a87d5c.jpeg?thumb=1&w=1686&h=165&f=webp&q=90" alt="">
      </div>
      <div class="contnet">
          <content-image></content-image>
          <content-image1></content-image1>
      </div>
  </div>
</template>
<script>
import ContentImage from './Content/ContentImage.vue'
import ContentImage1 from './Content/ContentImage1.vue'
export default {
  components: {
    ContentImage,
    ContentImage1
  }
}
</script>
<style lang="less" scoped>
.maincontent{
    margin: 0 auto;
    width: 1370px;
    .title{
        display: flex;
        align-items: center;
        height: 208px;
        width: 100%;
        img{
            cursor: pointer;
            width: 1370px;
            height: 134px;
        }
    }
}
</style>
