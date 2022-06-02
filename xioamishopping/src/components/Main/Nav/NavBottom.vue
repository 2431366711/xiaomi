<template>
  <div class="navbottom">
      <div class="left">
         <a href="" class="image">
              <el-icon><AlarmClock /></el-icon>
              <span>保障服务</span>
         </a>
           <a href="" class="image">
              <el-icon><AlarmClock /></el-icon>
              <span>保障服务</span>
         </a>
           <a href="" class="image">
              <el-icon><AlarmClock /></el-icon>
              <span>保障服务</span>
         </a>
           <a href="" class="image">
              <el-icon><AlarmClock /></el-icon>
              <span>保障服务</span>
         </a>
           <a href="" class="image">
              <el-icon><AlarmClock /></el-icon>
              <span>保障服务</span>
         </a>
         <a href="" class="image">
              <el-icon><AlarmClock /></el-icon>
              <span>保障服务</span>
         </a>
      </div>
      <div class="center1">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2596938425e8d9019ffae94fbcfa4524.jpg?w=632&h=340" alt="">
      </div>
      <div class="center2">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0c0c4d84bc85c12d936bf5d8775af44.jpg?w=632&h=340" alt="">
      </div>
      <div class="right">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c13d0d11b38ec17fa5d83bc6ba5912.jpg?w=632&h=340" alt="">
      </div>
  </div>
</template>
<script>
import { AlarmClock } from '@element-plus/icons-vue'
export default {
  components: {
    AlarmClock
  }
}
</script>
<style lang="less" scoped>
.navbottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .left{
        display: flex;
        justify-content: space-between;
        align-content: center;
        flex-wrap: wrap;
        height: 190px;
        width: 260px;
        background: #605850;
        .image{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 86px;
            height: 92px;
            color: #9a928a;
            text-decoration: none;
            font-weight: 500;
             .el-icon{
                 font-size: 24px;
             }
             span{
                 font-size: 14px;
             }
        }
        .image:hover{
            color: #fff;
        }
    }
    .center1{
        width: 352px;
        height: 190px;
        background: #fff;
        cursor: pointer;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .center2{
        width: 352px;
        height: 190px;
        background: #fff;
        cursor: pointer;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .right{
        width: 352px;
        height: 190px;
        background: #fff;
        cursor: pointer;
        img{
            height: 100%;
            width: 100%;
        }
    }
}
</style>
