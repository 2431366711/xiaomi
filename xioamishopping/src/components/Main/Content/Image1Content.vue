<template>
  <div class="image1content">
      <div class="image">
          <div class="left">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac5cafc68c10ce4471869d378f594b52.png?thumb=1&w=322&h=844&f=webp&q=90" alt="">
          </div>
          <div class="right">
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5713971c4bb6512743dfd06023080268.png?thumb=1&w=242&h=242&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=275&h=275&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=275&h=275&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=275&h=275&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=275&h=275&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=275&h=275&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=275&h=275&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
              <div class="content">
                  <a href=""><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=275&h=275&f=webp&q=90" alt=""></a>
                  <p class="title">Remdemi 11 pro</p>
                  <p class="quarity">天机8100|真旗舰芯</p>
                  <p class="price">2099元起</p>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.image1content{
  height: 100%;
  width: 100%;
  .image{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .left{
            height: 686px;
            width: 262px;
            background: white;
            transition: box-shadow 1s;
            img{
                height: 100%;
                width: 100%;
                cursor: pointer;
            }
        }
        .left:hover{
            box-shadow:10px 10px 10px #c4c4c4;
        }
        .right{
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            width: 1096px;
            height: 686px;
            .content{
                transition: box-shadow 1s ;
                display: flex;
                flex-direction:column ;
                align-items: center;
                justify-content: center;
                height: 338px;
                width: 264px;
                background: #fff;
                cursor: pointer;
                a{
                    margin-bottom: 28px;
                    img{
                        width: 156px;
                        height: 172px;
                    }
                }
                .title{
                    font-size: 14px;
                    color: #979c9d;
                    margin-bottom: 12px;
                }
                .quarity{
                    font-size: 12px;
                    color: #c9c8c9;
                    margin-bottom: 18px;
                }
                .price{
                    font-size: 14px;
                    color: #cc886c;
                }
            }
            .content:hover{
                 box-shadow:0px 10px 10px #c4c4c4;
            }
        }
    }
}
</style>
