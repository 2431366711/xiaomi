<template>
  <div class="loginview">
      <div class="loignimage"></div>
      <div class="content">
        <div class="loginheader">
          <login-header></login-header>
        </div>
       <div class="password">
         <div class="title">
           <router-link  :to="'/login/'+item.path" v-for="(item,index) in list" :key="index" @click="nowindex=index" :class="[nowindex==index?'balckcolor':'']" :style="{color:nowindex==index?'#000':''}">{{item.name}}</router-link>
         </div>
          <router-view></router-view>
       </div>
      </div>
  </div>
</template>
<script>
import LoginHeader from '@/components/Login/password/LoginHeader'
export default {
  components: {
    LoginHeader
  },
  data () {
    return {
      list: [{ name: '登录', path: 'password' }, { name: '注册', path: 'phone' }],
      nowindex: 0
    }
  }
}
</script>
<style lang="less" scoped>
.loginview{
    display: flex;
    height: 850px;
    width: 100%;
    background: #fcfcfc;
    .loignimage{
       background:  url(https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg);
       background-size: 100% 100%;
       width: 400px;
       height: 100%;
    }
    .content{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      .loginheader{
        height:86px ;
        width: 100%;
        margin-bottom: 20px;
      }
      .password{
        box-sizing: border-box;
        padding: 56px;
        height: 635px;
        width: 508px;
        background: #fff;
        .title{
          margin-bottom: 40px;
            a{
              font-size: 22px;
              font-weight: 700px;
              text-decoration: none;
              margin-right: 28px;
              color: #dde2e1;
            }
        }
      }
    }
}
.balckcolor{
  color: #000;
  border-bottom:2px solid #ff5c00 ;
}
</style>
