<template>
  <div class="mainheader">
     <div class="left">
         <ul>
             <li><a href="">小米商城</a></li>
             <li><a href="">|</a></li>
             <li><a href="">MIUI</a></li>
             <li><a href="">|</a></li>
             <li><a href="">Iot</a></li>
             <li><a href="">|</a></li>
             <li><a href="">云服务</a></li>
             <li><a href="">|</a></li>
             <li><a href="">天心数科</a></li>
             <li><a href="">|</a></li>
             <li><a href="">有品</a></li>
             <li><a href="">|</a></li>
             <li><a href="">小爱开放平台</a></li>
             <li><a href="">|</a></li>
             <li><a href="">企业团购</a></li>
             <li><a href="">|</a></li>
             <li><a href="">资质证照</a></li>
             <li><a href="">|</a></li>
             <li><a href="">协议规则</a></li>
             <li><a href="">|</a></li>
             <li><a href="">下载app</a></li>
             <li><a href="">|</a></li>
             <li><a href="">Select Location</a></li>
        </ul>
     </div>
     <div class="right">
         <ul>
             <li><a href="">登录</a></li>
             <li><a href="">|</a></li>
             <li><a href="">注册</a></li>
             <li><a href="">|</a></li>
             <li><a href="">消息通知</a></li>
         </ul>
         <div class="shoppingcar">
              <el-icon :size="20">
                  <ShoppingCartFull />
              </el-icon>
              <span>购物车({{shoppingnumber}})</span>
         </div>
     </div>
  </div>
</template>
<script>
import { ShoppingCartFull } from '@element-plus/icons-vue'
export default {
  components: {
    ShoppingCartFull
  },
  data () {
    return {
      shoppingnumber: 0
    }
  }
}
</script>
<style lang="less" scoped>
.mainheader{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width:1370px;
    .left{
        width: 812px;
        height:100%;
        ul{
            list-style: none;
            display: flex;
            justify-content: space-between;
            li{
                a{
                    line-height: 44px;
                    text-decoration: none;
                    color: #737471;
                    font-size: 12px;
                }
            }
            li:nth-child(2n+1){
               a{
                   font-weight: bold;
               }
            }
            li:nth-child(2n){
                a{
                  color: #383835;
                }
            }
        }
    }
    .right{
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 306px;
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 144px;
            height: 100%;
            list-style: none;
            li{
                a{
                 text-decoration: none;
                 font-size: 12px;
                }
            }
            li:nth-child(2n+1){
                a{
                   color: #737471;
                   font-weight: bold;
                }
            }
            li:nth-child(2n){
                a{
                  color: #383835;
                }
            }
        }
        .shoppingcar{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 134px;
            background: #434343;
            font-size: 12px;
            color: #737471;
            font-weight: bold;
            .el-icon{
               margin-right: 5px;
               font-size: 12px;
            }
        }
    }
}
</style>
