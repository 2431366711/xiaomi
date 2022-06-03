<template>
  <div class="loginpassword">
      <el-form ref="form" :model="form" label-width="0">
        <el-input type="text" placeholder="邮箱/手机号码/小米账号"></el-input>
        <el-input type="password" placeholder="密码"></el-input>
        <el-checkbox></el-checkbox>
        <span>已阅读并已经同意小米账号 <a>用户协议</a> 和 <a>隐私协议</a></span>
      </el-form>
      <el-button type="warning">登录</el-button>
      <div class="words">
        <a href="">忘记密码？</a>
        <a href="">手机号登录</a>
      </div>
      <p><a href="">其他方式登录</a></p>
      <div class="image"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.loginpassword{
  height: 100%;
  width: 100%;
  .el-form{
    margin-bottom: 28px;
    /deep/.el-input{
      margin-bottom: 25px;
      height: 68px;
    }
    /deep/ .el-input__inner::placeholder{
      color: #626262;
      font-size: 14px;
      padding: 0 24px ;
    }
    span{
      margin-left: 4px;
      font-size: 14px;
      color:#626262 ;
      a{
        text-decoration: none;
        color: #a8a6ae;
      }
    }
  }
  .el-button{
    height: 68px;
    width: 100%;
    color: #f9ddca;
    font-size: 18px;
    margin-bottom: 16px;
  }
  .words{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    a{
      text-decoration: none;
      font-size: 16px;
      color: #e8b996;
    }
  }
  p{
    a{
       color: #a8a6ae;
      margin-bottom: 25px;
      text-decoration: none;
    }
      text-align: center;
     ;
  }
  .image{
    height: 54px;
    width: 100%;
  }
}
</style>
