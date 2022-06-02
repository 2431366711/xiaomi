<template>
  <div class="contentimage1">
      <div class="contentheader">
         <contentimage-header @getnowindex="getNowIndex"></contentimage-header>
      </div>
      <div class="contentimage">
          <image1-content v-if="index==0"></image1-content>
          <image2-content v-else-if="index==1"></image2-content>
      </div>
  </div>
</template>
<script>
import ContentimageHeader from './ContentimageHeader.vue'
import Image1Content from './Image1Content.vue'
import Image2Content from './Image2Content.vue'
export default {
  components: {
    Image1Content,
    ContentimageHeader,
    Image2Content
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    getNowIndex (e) {
      this.index = e
    }
  }
}
</script>
<style lang="less" scoped>
.contentimage1{
    height: 776px;
    width: 100%;
    .contentheader{
        margin-bottom:20px;
    }
    .contentimage{
        height: 100%;
        width: 100%;
    }
}
</style>
