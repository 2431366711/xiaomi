<template>
  <div class="contentimageheader">
      <span>智能穿戴</span>
      <span>
          <a href="javascript:;"
          v-for="(item,index) in list"
          :key="index"
          @mouseenter="getNowIndex(index)"
          :style="{color:(nowindex==index?'#ff6700':'#000'),'border-bottom':(nowindex==index?border:'0')}">
          {{item}}
          </a>
      </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ['热门',
        '穿戴'],
      nowindex: 0,
      border: '2px solid #ff6700'
    }
  },
  methods: {
    getNowIndex (index) {
      this.nowindex = index
      this.$emit('getnowindex', this.nowindex)
    }
  }
}
</script>
<style lang="less" scoped>
.contentimageheader{
    box-sizing: border-box;
    width:100%;
    display: flex;
    justify-content: space-between;
    span{
        color:#000;
        font-size: 22px;
        a{
            text-decoration: none;
            font-size: 18px;
            color:#000;
            margin-right: 10px;
            padding: 2px;
        }
        a:nth-child(2){
          color: #ff6700 ;
          border-bottom: 2px solid #ff6700;
        }
    }
}
</style>
