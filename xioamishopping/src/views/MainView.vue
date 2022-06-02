<template>
  <div class="mainview">
     <div class="header">
      <main-header></main-header>
     </div>
    <div class="nav">
      <main-nav></main-nav>
    </div>
    <div class="content">
      <main-content></main-content>
    </div>
    <div class="footer">
      <main-footer></main-footer>
    </div>
  </div>
</template>
<script>
import MainHeader from '../components/Main/MainHeader.vue'
import MainNav from '../components/Main/MainNav.vue'
import MainContent from '../components/Main/MainContent'
import MainFooter from '../components/Main/MainFooter.vue'
export default {
  components: {
    MainHeader,
    MainNav,
    MainContent,
    MainFooter
  },
  data () {
    return {
      navindex: -1
    }
  },
  methods: {}
}
</script>
<style lang="less">
.show{
  display: block;
}
.appear{
  display: none;
}
.mainview {
  width: 100%;
  height: 100%;
  .header {
    background: #333;
    width: 100%;
    height: 44px;
  }
  .nav {
    position: relative;
    margin: 0 auto;
    height: 862px;
    width: 100%;
  }
  .content{
    background: #f5f5f5;
    width: 100%;
  }
  .footer {
    height: 668px;
    width: 100%;
    background: #333;
  }
}
</style>
