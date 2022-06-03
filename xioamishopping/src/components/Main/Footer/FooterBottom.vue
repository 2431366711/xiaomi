<template>
  <div class="footerbottom">
    <div class="words">
       <a href="" v-for="(item,index) in list" :key="index">{{item}}</a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ['小米商城',
        'MIUI',
        '米家',
        '米聊',
        '多看 ',
        ' 游戏',
        '政企服务',
        '小米天猫店',
        '小米集团隐私政策',
        ' 小米公司儿童信息保护规则',
        '小米商城隐私政策',
        '小米商城用户协议',
        '问题反馈',
        'Select Location',
        '北京互联网法院法律服务工作站',
        '中国消费者协会',
        '北京市消费者协会']
    }
  }
}
</script>
<style lang="less" scoped>
.footerbottom{
  margin: 0 auto;
  height: 100%;
  width: 1370px;
  .words{
    width: 1004px;
    height: 100%;
    a{
      text-decoration: none;
      font-size: 13px;
      color: #b1b1b1;
      padding: 0 4px;
      border-right: 1px solid #b1b1b1;
    }
  }
}
</style>
