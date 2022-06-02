<template>
  <div class="topprivity">
    <ul>
      <li>
        <a href=""><img src="../../../../assets/88ae9b85c5f8fbdae2ea98d58a045e1e.png" alt=""></a>
        <p>Xiaomi Civi 1S</p>
        <p class="color">2200元起</p>
      </li>
      <li>
        <a href=""><img src="../../../../assets/88ae9b85c5f8fbdae2ea98d58a045e1e.png" alt=""></a>
        <p>Xiaomi Civi 1S</p>
        <p class="color">2200元起</p>
      </li>
      <li>
        <a href=""><img src="../../../../assets/88ae9b85c5f8fbdae2ea98d58a045e1e.png" alt=""></a>
        <p>Xiaomi Civi 1S</p>
        <p class="color">2200元起</p>
      </li>
       <li>
        <a href=""><img src="../../../../assets/88ae9b85c5f8fbdae2ea98d58a045e1e.png" alt=""></a>
        <p>Xiaomi Civi 1S</p>
        <p class="color">2200元起</p>
      </li>
       <li>
        <a href=""><img src="../../../../assets/88ae9b85c5f8fbdae2ea98d58a045e1e.png" alt=""></a>
        <p>Xiaomi Civi 1S</p>
        <p class="color">2200元起</p>
      </li>
       <li>
        <a href=""><img src="../../../../assets/88ae9b85c5f8fbdae2ea98d58a045e1e.png" alt=""></a>
        <p>Xiaomi Civi 1S</p>
        <p class="color">2200元起</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="less" scoped>
.topprivity{
  overflow: hidden;
  height:100%;
  margin: 0 auto;
  ul{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      a{
        border-right: 1px solid #e5e5e5;
        margin-bottom: 30px;
        img{
          height: 160px;
          width:260px;
        }
      }
      p{
        font-size: 12px;
        color: #2f3433;
      }
      .color{
           margin-top: 12px;
           color: #fcd5ad;
      }
    }
    li:last-child{
      a{
        border: 0;
      }
    }
  }
}
</style>
