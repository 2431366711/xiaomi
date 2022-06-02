<template>
  <div class="footertop">
      <div class="topfooter">
          <ul>
              <li><a href="">预约维修服务</a></li>
              <li><a href="">预约维修服务</a></li>
              <li><a href="">预约维修服务</a></li>
              <li><a href="">预约维修服务</a></li>
              <li><a href="">预约维修服务</a></li>
          </ul>
      </div>
      <div class="bottomfooter">
          <div class="footerwords">
          <ul>帮助中心
              <li><a href="">账户管理</a></li>
              <li><a href="">购物指南</a></li>
              <li><a href="">订单操作</a></li>
          </ul>
          <ul>帮助中心
              <li><a href="">账户管理</a></li>
              <li><a href="">购物指南</a></li>
              <li><a href="">订单操作</a></li>
              <li><a href="">订单操作</a></li>
          </ul>
          <ul>帮助中心
              <li><a href="">账户管理</a></li>
              <li><a href="">购物指南</a></li>
              <li><a href="">订单操作</a></li>
              <li><a href="">订单操作</a></li>
          </ul>
          <ul>帮助中心
              <li><a href="">账户管理</a></li>
              <li><a href="">购物指南</a></li>
              <li><a href="">订单操作</a></li>
              <li><a href="">订单操作</a></li>
          </ul>
          <ul>帮助中心
              <li><a href="">账户管理</a></li>
              <li><a href="">购物指南</a></li>
              <li><a href="">订单操作</a></li>
              <li><a href="">订单操作</a></li>
          </ul>
           <ul>帮助中心
              <li><a href="">账户管理</a></li>
              <li><a href="">购物指南</a></li>
              <li><a href="">订单操作</a></li>
              <li><a href="">订单操作</a></li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.footertop{
    margin: 0 auto;
    height: 100%;
    width: 1370px;
    .topfooter{
        height: 90px;
        width: 100%;
        border-bottom: 1px solid #e9e9e9;
        ul{
            display: flex;
            justify-content: space-between;
            list-style: none;
            height: 100%;
            width: 100%;
            li{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 272px;
                height: 100%;
                a{
                   color: #788178;
                   text-decoration: none;
                   font-size: 18px;
                   width: 100%;
                   text-align: center;
                   border-right: 2px solid #e9e9e9;
                }
            }
            li:last-child{
                a{
                    border: 0;
                }
            }
        }
    }
    .bottomfooter{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: calc(100% - 90px);
        width: 100%;
        .footerwords{
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: space-between;
          ul{
            width: fit-content;
            text-align: center;
            list-style: none;
            li{
                padding: 7px;
                a{
                    text-decoration: none;
                    font-size: 14px;
                    color: #788178;
                }
            }
            li:first-child{
                margin-top: 10px;
            }
        }
        }
    }
}
</style>
