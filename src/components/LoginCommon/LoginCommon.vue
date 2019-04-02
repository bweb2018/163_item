<template>
  <section class="user-content" v-if="info">
    <div class="login-warp">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="l-input">
      <div class="t-input">
        <mt-search class="input"
        cancel-text=""
        :placeholder="info.phoneUser">
      </mt-search></div>
      <div class="t-input">
        <mt-search class="input"
        cancel-text=""
        :placeholder="info.message">
      </mt-search>
      <div class="message-code" v-if="info.reqCode">{{info.reqCode}}</div>
      </div>
      <div class="hint-code-err">
        <span>{{info.err}}</span>
      </div>
      <div class="issue">
        <span>{{info.issue}}</span>
        <span>{{info.issuer}}</span>
      </div>
    </div>
    <div class="btns">
      <div class="btn u-t-btn">
        <span>登陆</span>
      </div>
      <div class="btn u-b-btn" @click="setShow(true)">
        <span>其它方式登陆</span>
      </div>
      <div class="u-text">
        <span>注册帐号</span>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import {Search} from 'mint-ui'
  Vue.component(Search.name, Search)
  export default {

    props: {info: Object,setShow: Function},
    methods: {

    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user-content
    width 100%
    height 1140px
    background #fff
    .login-warp
      width 100%
      height 60px
      margin-top 42px
      line-height 60px
      text-align center
      img
        width 182px
        height 60px
    .l-input
      width 670px
      box-sizing border-box
      margin 160px auto 0
      .t-input
        width 670px
        height 90px
        line-height 90px
        margin-bottom 30px
        .input
          height 62px
          font-size 30px
          color #333
          float left

        .mint-searchbar-core
          outline none
        .message-code
          margin-top 20px
          float right
          width 168px
          height 56px
          line-height 56px
          color #333
          border 1px solid #333
          border-radius 6%
          font-size 28px
          text-align center

    .hint-code-err
      width 600px
      height 40px
      line-height 40px
      margin 30px 0
      span
        color red
    .issue
      width 670px
      height 42px
      margin-bottom 30px
      span
        font-size 28px
        color #333
        &:last-child
          float right
    .btns
      width 100%
      height 292px
      box-sizing border-box
      margin-bottom 204px
      padding 0 40px
      .btn
        width 100%
        height 94px
        vertical-align bottom
        margin-bottom 32px
        text-align center
        box-sizing border-box
      .u-t-btn
        background #b4282d
        font-size 28px
        color #fff
        display flex
        justify-content center
        align-items center
        icon
          font-size 40px
      .u-b-btn
        border 1px solid #b4282d
        font-size 28px
        color #b4282d
        display flex
        justify-content center
        align-items center
      .u-text
        width 100%
        height 40px
        font-size 28px
        text-align center
        line-height 40px
        color #333

</style>
