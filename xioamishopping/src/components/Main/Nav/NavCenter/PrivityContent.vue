<template>
  <div class="privitycontent">
      <ul>
          <li v-for="item in list" :key="item.name">
              <a href="">
                  <img :src="item.image" alt="">
                  <span>{{item.name}}</span>
            </a>
          </li>
      </ul>
        <ul>
          <li v-for="item in list" :key="item.name">
              <a href="">
                  <img :src="item.image" alt="">
                  <span>{{item.name}}</span>
            </a>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [{ name: '冰箱', image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=80&h=80&f=webp&q=90' },
        { name: '立式空调', image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cef72d0fea727cdf62b8e18b3d039d1.png?thumb=1&w=80&h=80&f=webp&q=90' },
        { name: '立式空调', image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cef72d0fea727cdf62b8e18b3d039d1.png?thumb=1&w=80&h=80&f=webp&q=90' },
        { name: '立式空调', image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cef72d0fea727cdf62b8e18b3d039d1.png?thumb=1&w=80&h=80&f=webp&q=90' },
        { name: '立式空调', image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cef72d0fea727cdf62b8e18b3d039d1.png?thumb=1&w=80&h=80&f=webp&q=90' },
        { name: '立式空调', image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cef72d0fea727cdf62b8e18b3d039d1.png?thumb=1&w=80&h=80&f=webp&q=90' }],
      listnumber: 0
    }
  },
  methods: {
    getListNumber () {
      this.listnumber = Math.ceil(this.list.length / 6)
    }
  },
  created () {
    this.getListNumber()
  }
}
</script>
<style lang="less" scoped>
.privitycontent{
    width: fit-content;
    height: 100%;
    box-shadow: 4px 4px 20px #888;
    display: flex;
    ul{
        padding: 10px 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 276px;
        height: 100%;
        background: white;
        li{
            cursor: pointer;
            width: 276px;
            a{
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
                text-decoration: none;
                img{
                    height:60px;
                    width: 50px;
                    margin-right: 28px;
                }
                span{
                    color: #000;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
