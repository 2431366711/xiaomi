<template>
  <div class="navcenter">
      <div class="left">
          <ul>
              <li v-for="(item,index) in list" :key="index" @mouseenter="getIndex(index)">
                  <a href="">{{item}}
                      <span>></span>
                  </a>
               </li>
          </ul>
      </div>
      <!-- <div class="privity" :class="[nowindex>=0?'show':'appear']" > -->
     <div class="privity" v-if="nowindex!=-1">
          <privity-content v-if="nowindex==0" @mouseleave="nowindex=-1"></privity-content>
      </div>
      <div class="right">
          <span>&lt;</span>
          <span>></span>
      </div>
      <div class="circle">
          <div class="smallcircel"></div>
          <div class="smallcircel"></div>
          <div class="smallcircel"></div>
          <div class="smallcircel"></div>
          <div class="smallcircel"></div>
      </div>
  </div>
</template>
<script>
import PrivityContent from './NavCenter/PrivityContent'
export default {
  components: {
    PrivityContent
  },
  data () {
    return {
      list: ['手机',
        '电视',
        '笔记本 平板',
        '出行 穿戴',
        '耳机 音响',
        '家电',
        '智能 路由器',
        '电源 配件',
        '健康 儿童',
        '生活 箱包'],
      nowindex: -1,
      leftindex: -1
    }
  },
  methods: {
    getIndex (index) {
      this.nowindex = index
    }
  }
}
</script>
<style lang="less" scoped>
.show{
    display: block;
}
.appear{
    display: none;
}
.navcenter{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    background: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a316c1232aec88bd1e73da856a599a62.jpg?thumb=1&w=1686&h=633&f=webp&q=90");
    background-size: 100% 100%;
    .left{
        overflow: hidden;
        height: 100%;
        width: 262px;
        background: rgba(0, 0, 0, .5);
        ul{
            margin-top: 22px;
            height: 100%;
            width: 100%;
            list-style: none;
            li{
                position: relative;
                padding: 12px 0;
                a{
                    display: flex;
                    justify-content: space-between;
                    font-size: 18px;
                    color: #fff;
                    text-decoration: none;
                    margin-left: 24px;
                    span{
                        margin-right: 24px;
                    }
                }
            }
            li:hover{
                background: #ff6700;
            }
        }
    }
    .privity{
        position: absolute;
        top: 0;
        left: 262px;
        height: 100%;
        width: 1108px;
        z-index: 100;
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height:100%;
        width:1108px ;
        span{
           display: none;
           padding: 14px;
           color: #d9d1ca;
           font-size: 36px;
           cursor: pointer;
        }
    }
    .right:hover span{
        display: block;
    }
    .circle{
        position: absolute;
        right: 32px;
        bottom: 26px;
        display: flex;
        justify-content: space-between;
        width: 90px;
        height: 10px;
        .smallcircel{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #8b8b8c;
            cursor: pointer;
        }
    }
}
</style>
