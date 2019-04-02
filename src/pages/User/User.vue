<template>
  <div class="long-wrap">
    <CardHeader titleT="网易严选"/>
   <section class="users-content" v-if="loginSwitch">
     <div class="login-warp">
       <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
     </div>
     <div class="btn">
       <div class="btn u-t-btn" @click="gotoPhoneLongin">
         <icon class="iconfont icon-shouji" name="q"></icon>
         <span>手机号登陆</span>
       </div>
       <div class="btn u-b-btn" @click="gotoPhoneLongin">
         <icon class="iconfont icon-message" name="q"></icon>
         <span>邮箱帐号登陆</span>
       </div>
       <div class="u-text">
         <span>手机号快捷注册</span>
       </div>
     </div>
     <ul class="foot-link">
       <li>
         <icon class="iconfont icon-xingzhuang" name="q"></icon>
         <span>微信</span>
       </li>
       <li>
         <icon class="iconfont icon-qq" name="q"></icon>
         <span>QQ</span>
       </li>
       <li>
         <icon class="iconfont icon-weibo" name="q"></icon>
         <span>微博</span>
       </li>
     </ul>

   </section>
    <LoginCommon :info="sendInfo" v-if="!loginSwitch" :setShow="setShow"/>
  </div>


</template>

<script>
import CardHeader from '../../components/CardHeader/CardHeader.vue'
import LoginCommon from '../../components/LoginCommon/LoginCommon.vue'
  export default {
    data () {
      return {
        loginInfo: [
          {phoneUser:'邮箱帐号', message:'密码', err:'请输入帐号',issue: '注册帐号',issuer:'忘记密码',},
          {phoneUser:'请输入手机号', message:'请输入短信验证码', reqCode:'获取验证码',issue: '遇到问题？',issuer:'使用密码验证登录',err:'手机号格式错误'}
        ],
        sendInfo: {},
        loginSwitch: true,

      }
    },
    props: [],
    methods: {
      gotoPhoneLongin (e) {
        this.loginSwitch = !this.loginSwitch
        let text = e.target.innerText
        const loginInfo = this.loginInfo
        this.sendInfo = text === '手机号登陆' ? loginInfo[1]: {} ||  text !== '手机号登陆' ? loginInfo[0]: {}
        console.log(this.sendInfo.length)
      },
      setShow (bool) {
        this.loginSwitch = bool
      }

    },
    watch: {
      sendInfo () {
      }
    },
    components: {CardHeader,LoginCommon}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.long-wrap*/
    /*width 100%*/
    /*height 100%*/
    /*overflow hidden*/
    /*box-sizing border-box*/
    .users-content
      width 100%
      height 1240px
      background #f4f4f4
      .login-warp
        width 100%
        height 410px
        line-height 460px
        box-sizing border-box
        text-align center
        img
          width 268px
          height 90px
      .btn
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
        icon
          font-size 40px
      .u-text
        width 100%
        height 40px
        font-size 28px
        text-align center
        line-height 40px
        color #333

      .foot-link
        position absolute
        left 0px
        bottom 80px
        width 100%
        height 40px
        display flex
        justify-content center
        >li
          width 182px
          height 100%
          float left
          color #7f7f7f
          box-sizing border-box
          padding 0 40px
          &:nth-child(2)
            border-left 1px solid #7f7f7f
            border-right 1px solid #7f7f7f
          .iconfont
            font-size 28px
          span
            font-size 28px
</style>
