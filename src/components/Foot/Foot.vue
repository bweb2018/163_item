<template>
  <footer class="footContainer">
    <a href="javascript:;" class="guide_item" @click="goto('home')" :class="{on: $route.path === '/home'}">
      <span class="font_icon"><i class="iconfont" :class="$route.path === '/home' ? 'icon-home-active' : 'icon-home'"></i></span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('classify')" :class="{on: $route.path === '/classify'}">
      <span class="font_icon"><i class="iconfont" :class="$route.path === '/classify' ? 'icon-classify-active' : 'icon-classify'"></i></span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('discern')" :class="{on: $route.path === '/discern'}">
      <span class="font_icon">
        <i class="iconfont" :class="$route.path === '/discern' ? 'icon-discern-active' : 'icon-discern'"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click.stop="goto('shop')" :class="{on: $route.path === '/shop'}">
      <span class="font_icon"><i class="iconfont" :class="$route.path === '/shop' ? 'icon-shop-active' : 'icon-shop'"></i></span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click.stop="goto('user')" :class="{on: $route.path === '/user'}">
      <span class="font_icon"><i class="iconfont" :class="$route.path === '/user' ? 'icon-user-active' : 'icon-user'"></i></span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
import '../../../static/icon/iconfont.css'
import '../../../static/font_6trv1a94r1e/iconfont.css'

  export default {

    props: [],
    methods: {
      goto (path) {
        console.log(path)
        this.$router.replace(`/${path}`)
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footContainer
    position absolute
    left 0px
    bottom 0px
    width: 100%
    height: 100px
    display flex
    background #fafafa
    .guide_item
      display flex
      flex 1
      justify-content center
      align-items center
      flex-direction column
      &.on
        color #b4282d
      span
        font-size 24px
        margin 2px 0
        .iconfont
          display inline-block
          width 40px
          height 40px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size 40px 490px
        .icon-home
          background-position: 0 -250px
        .icon-home-active
          background-position: 0 -200px

        .icon-classify
          background-position: 0 -150px
        .icon-classify-active
          background-position: 0 -100px
        .icon-discern
          background-position: 0 -350px
        .icon-discern-active
          background-position: 0 -300px
        .icon-shop
          background-position: 0 -50px
        .icon-shop-active
          background-position: 0 0
        .icon-user
          background-position: 0 -450px
        .icon-user-active
          background-position: 0 -400px









</style>
<!---.u-icon-tabBar-index
          background-position: 0 -250px

        .u-icon-tabBar-index-active
          background-position: 0 -200px

        .u-icon-tabBar-cate
          background-position: 0 -150px

        .u-icon-tabBar-cate-active
          background-position: 0 -100px

        .u-icon-tabBar-topic
          background-position: 0 -350px

        .u-icon-tabBar-topic-active
          background-position: 0 -300px

        .u-icon-tabBar-cart-active
          background-position: 0 0

        .u-icon-tabBar-cart
          background-position: 0 -50px

        .u-icon-tabBar-ucenter
          background-position: 0 -450px

        .u-icon-tabBar-ucenter-active
          background-position: 0 -400px->
