<template>
  <div class="c-content">
    <ul class="content-list">
      <li class="list" style="background-image:url(http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
        <span class="t-top">海外制造商</span>
        <span class="t-bottom">9.9元起</span>
        <span class="t-new">上新</span>
      </li>
      <li class="list" style="background-image:url(http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
        <span class="t-top">海外制造商</span>
        <span class="t-bottom">9.9元起</span>
        <span class="t-new">上新</span>
      </li>
      <li class="list" style="background-image:url(http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
        <span class="t-top">海外制造商</span>
        <span class="t-bottom">9.9元起</span>
        <span class="t-new">上新</span>
      </li>
      <li class="list" style="background-image:url(http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
        <span class="t-top">海外制造商</span>
        <span class="t-bottom">9.9元起</span>
        <span class="t-new">上新</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {

    props: [],

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .c-content
    width 100%
    height 554px
    margin-bottom 20px
    padding 0 20px 26px 30px
    box-sizing border-box
    .content-list
      width 100%
      height 554px
      margin-bottom 20px
      .list
        float left
        width 343px
        height 260px
        margin 0 4px 4px 0
        background #f4f4f4
        background-repeat no-repeat
        box-sizing border-box
        padding-top 23px
        text-align center
        .t-top
          display block
          font-size 28px
          margin-bottom 10px
          color #333
        .t-bottom
          font-size 24px
          color #7f7f7f
        .t-new
          background  #cbb693
          font-size 24px
          color #fff
          padding 0 8px
</style>
