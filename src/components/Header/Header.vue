<template>
  <div id="headerContainer">
    <div class="line">
      <a class="logo"><img data-v-c94ea186="" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选"></a>
      <div class="m-topSearchIpt ipt" data-reactid=".0.0.0.1.0.1">
        <i class="icon" data-reactid=".0.0.0.1.0.1.0"></i>
        <span class="placeholder" data-reactid=".0.0.0.1.0.1.1">搜索商品, 共22110款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
    <div class="headerBottom">
      <div class="headerList">
        <ul class="tabWrap">
          <li class="tab"><span>推荐</span></li>
          <li class="tab" v-for="(king,index) in homeData.kingKongModule.kingKongList" :key="index">
            <span>{{king.text}}</span>
          </li>

        </ul>
      </div>
      <div class="toggle">
          <div class="icon">
          </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
//        kingKongList: []
      }
    },
    props: [],
    computed: {
      ...mapState({
        homeData: state => state.home.shopsData,

      }),
      listNav () {

      }
    },
    mounted () {
      this.$store.dispatch('reqShopsData')
    },

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #headerContainer
    width 100%
    height 150px
    box-sizing border-box
    margin  0 18px
    /*background deeppink*/
    .line
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      .logo
        float left
      .m-topSearchIpt
        float left
        width 443px
        height 56px
        line-height 56px
        background #ededed
        font-size 28px
        color #666
        text-align center
      .icon
        display inline-block
        vertical-align middle
        width 38px
        height 38px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
        background-repeat no-repeat
        margin-right -10px
      .loginBtn
        width 75px
        height 40px
        line-height 40px
        border 1px solid #b4282d
        border-radius 10px
        text-align center
        color #b4282d

    .headerBottom
      width 100%
      height 60px
      background deeppink
      .headerList
        position relative
        height 100%
        overflow hidden
        background yellowgreen
        margin-left 28px
        box-sizing border-box
        .tabWrap
          float left
          height 100%
          .tab
            display flex
            align-items center
            justify-content center
            float left
            width 150px
            height 100%
            span
              font-size 30px
              color #333
      .toggle
        position absolute
        right 0px
        top 90px
        width 120px
        height 60px
        float right
        .icon
          float right
          width 50px
          height 50px
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
          background-repeat no-repeat
</style>
