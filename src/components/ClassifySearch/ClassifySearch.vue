<template>
  <div class="search">
    <div class="s-input-wrap" @click="$router.push('/home/search')">
      <div class="icon"></div>
      <span>搜索商品, 共22318款好物</span>
    </div>
  </div>

</template>

<script>

  export default {

    props: [],

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    width 100%
    height 88px
    box-sizing border-box
    padding 0 30px
    display flex
    align-items center
    background #fff
    .s-input-wrap
      float left
      width 690px
      height 56px
      box-sizing border-box
      padding 0 20px
      background #f4f4f4
      display flex
      align-items center
      justify-content center
      .icon
        width 28px
        height 28px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
        background-repeat no-repeat
        margin-right 16px
      span
        font-size 28px
        color #666
        height 41px
        line-height 41px
</style>
