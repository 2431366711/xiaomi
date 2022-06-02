<template>
  <div class="navtopprivity">
<top-privity v-if="index==0"></top-privity>
<top-privity1 v-else-if="index==1"></top-privity1>
<top-privity v-else-if="index==2"></top-privity>
<top-privity v-else-if="index==3"></top-privity>
  </div>
</template>
<script>
import TopPrivity from './NavTop/TopPrivity'
import TopPrivity1 from './NavTop/TopPrivity1'
export default {
  components: {
    TopPrivity,
    TopPrivity1
  },
  props: {
    index: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      navindex: -1
    }
  }
}
</script>
<style lang="less" scoped>
.navtopprivity{
     height: 100%;
     width: 100%;
     border-top: 1px solid #e5e5e5;
}
</style>
