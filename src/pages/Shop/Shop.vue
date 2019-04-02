<template>
  <div data-v-19372199="" class="shopcar_box">
    <div data-v-19372199="" class="car_header">
      <div data-v-19372199="" class="car_title">
        <span data-v-19372199="">购物车</span>
      </div> <div data-v-19372199="" class="tips">
      <span data-v-19372199="" @click="$router.push('/user')">领券</span>
    </div>
    </div>
    <div data-v-19372199="" class="car_content">
      <div data-v-19372199="" class="service">
        <span data-v-19372199="">30天无忧退货</span>
        <span data-v-19372199="">48小时无忧退款</span>
        <span data-v-19372199="">满88元免邮费</span>
      </div> <div data-v-19372199="" class="did_not_login">
      <img data-v-19372199="" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="ShopCar">
      <p data-v-19372199="">去添加点什么吧</p>
      <button data-v-19372199="" class="on" @click="login">登录</button>
    </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        isButColor: false
      }
    },
    methods: {
      login () {
        this.$router.replace('/user')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopcar_box
    width 100%
    padding-top 88px
    font-size 28px
    background-color #f4f4f4
    .car_header
      position fixed
      top 0
      left 0
      width 100%
      height 88px
      background-color #fff
      .car_title
        width 100%
        height 100%
        font-size 36px
        display flex
        align-items center
        justify-content center
      .tips
        position absolute
        right 60px
        top 10px
        transform translateY(50%)
        font-size 30px
        color $themeColor
    .car_content
      width 100%
      padding-top 30px
      .service
        font-size 24px
        color #666
        display flex
        align-items center
        justify-content space-around
      .did_not_login
        text-align center
        >img
          display block
          width 248px
          height 248px
          margin 375px auto 0
        >p
          color #999
        >button
          width 480px
          height 92px
          margin 50px auto 288px
          font-size 40px
          color #fff
          &.on
            background #b4282d
</style>
