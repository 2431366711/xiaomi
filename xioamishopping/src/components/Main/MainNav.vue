<template>
  <div class="miancontent">
    <div class="top">
        <div class="toptop">
          <img src="../../assets/R-C.png" alt="">
        <div class="choose">
        <ul>
            <li v-for="(item,inde) in list" :key="inde"><a href="" @mouseenter="getFirstOne(inde)">{{item}}</a>
            </li>
        </ul>
        </div>
        <div class="select">
            <input type="text" placeholder="电视">
            <el-button>
            <el-icon>
               <Search/>
            </el-icon>
            </el-button>
        </div>
        </div>
        <transition name="privity">
           <div class="topbottom" v-if="index>=0&&index<=6" >
              <navtop-privity :index="index"></navtop-privity>
            </div>
        </transition>
         <!-- <transition name="cssprivity">
         <div class="topbottom" v-if="index<=3&&index>=0" @mouseleave="index=-1">
          </div>
         </transition> -->
    </div>
    <div class="center">
      <nav-center></nav-center>
    </div>
    <div class="bottom">
      <nav-bottom></nav-bottom>
    </div>
  </div>
</template>
<script>
import { Search } from '@element-plus/icons-vue'
import NavtopPrivity from './Nav/NavtopPrivity.vue'
import NavCenter from './Nav/NavCenter'
import NavBottom from './Nav/NavBottom'
export default {
  components: {
    Search,
    NavtopPrivity,
    NavCenter,
    NavBottom
  },
  data () {
    return {
      index: -1,
      list: ['小米手机',
        '红米手机',
        '电视',
        '笔记本',
        '平板',
        '家电',
        '路由器',
        '服务',
        '社区']
    }
  },
  methods: {
    getFirstOne (index) {
      this.index = index
      this.$emit('getIndex', this.index)
    }
  }
}
</script>
<style lang="less" scoped>
.miancontent {
  height: 100%;
  width: 100%;
  .top{
    position: relative;
    z-index: 20;
      .toptop{
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 112px;
      width: 1370px;
      img{
          height: 62px;
          width: 62px;
      }
      .choose{
          height: 100%;
          width: 650px;
          background: white;
          ul{
              list-style:none;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 100%;
              li{
                  a{
                     text-decoration: none;
                     font-size: 18px;
                     color: #a9a096;
                  }
                  a:hover{
                      color:#c67d36;
                  }
                  .topbottom{
                    overflow: hidden;
                    position: absolute;
                    top: 112px;
                    left: 0;
                    background: #ccc;
                    height: 0px;
                    width: 100%;
                    transition: height 1s;
                  }
              }
              li:hover .topbottom{
                  height: 250px;
              }
          }
      }
      .select{
          display: flex;
          align-items: center;
          height: 100%;
          width: 330px;
          background: #fff;
          input{
              width: 272px;
              height: 55px;
              padding:0 12px;
              border:1px solid #f3f3f3;
              color: #b8b8b3;
          }
          input::placeholder{
              color: #b8b8b3;
          }
          .el-button{
              width: 58px;
              height: 55px;
              border-radius: 0;
              border: 1px solid #f3f3f3;
              .el-icon{
                  font-size: 18px;
                  font-weight: bold;
              }
          }
      }
  }
  }
   @keyframes identifier {
     0%{height: 0;}
     100%{height: 290px; }
   }
  .privity-enter-active{animation: identifier 1s;}
  .privity-leave-active{animation:identifier 1s reverse ;}
  .topbottom{
    position:absolute;
    top: 112px;
    height: 290px;
    width: 100%;
    background: #fff;
  }
  .center{
    z-index: -1;
    margin: 0 auto;
    height: 514px;
    width: 1370px;
  }
  .bottom{
    margin: 0 auto;
    height: 238px;
    width: 1370px;
  }
}
</style>
