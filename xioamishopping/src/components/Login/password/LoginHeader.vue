<template>
  <div class="loginheader">
      <div class="left">
          <span>小米账号</span>
      </div>
      <div class="right">
          <div class="top">
              <ul>
                  <li><a href="">用户协议</a></li>
                  <li><a href="">隐私政策</a></li>
                  <li><a href="">帮助中心</a></li>
              </ul>
          </div>
          <div class="bottom">
              <a href="">中文（简体）</a>
              <div class="ciecle"></div>
          </div>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.loginheader{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        margin-left: 20px;
    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .top{
            ul{
                padding:0 20px;
                list-style: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                li{
                    padding:0 20px ;
                    a{
                        font-size: 14px;
                        text-decoration: none;
                        color: #b5b9b5;
                    }
                }
            }
        }
        .bottom{
            a{
                border-left: 1px solid #ccc;
                padding:0 20px;
                font-size: 14px;
                text-decoration: none;
                color: #b5b9b5;
            }
        }
    }
}
</style>
