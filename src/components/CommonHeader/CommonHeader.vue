<template>
  <div class="h-wrap">
    <span class="t-left">{{text}}</span>
    <div class="icon"></div>
    <span class="t-right">更多</span>
  </div>
</template>

<script>

  export default {

    props: {
      text: String
    },

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .h-wrap
    width 100%
    height 100px
    line-height 100px
    box-sizing border-box
    padding 0 30px
    color #333
    .t-left
      float left
      font-size 32px
    .t-right
      float right
      font-size 28px
    .icon
      float right
      vertical-align: middle;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: .17333rem;
      height: .30667rem
      margin 37px 0 0 10px


</style>
