<template>
  <div id="headerContainer">
    <div class="line">
      <a class="logo"><img data-v-c94ea186="" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选"></a>
      <div class="m-topSearchIpt ipt" @click="$router.push('/home/search')">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共22110款好物</span>
      </div>
      <div class="loginBtn" @click="$router.replace('/user')">登录</div>
    </div>
    <HeaderBottom :isIndex="isIndex" :switchIcon="switchIcon" :kingKongList="kingKongList"
    :addBorder="addBorder" :rotateIcon="rotateIcon"
    />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import HeaderBottom from '../../pages/HeaderBottom/HeaderBottom.vue'
  export default {
    data () {
      return {
        kingKongList: ['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','礼品特色'],
        isIndex: 0,
        switchIcon: false
      }
    },
    mounted () {
      const wrapper = document.querySelector('.headerList')
      const scroll = new BScroll(wrapper,{
        scrollX:true
      })
    },
    methods: {
      addBorder (e) {
        this.isIndex = this.kingKongList.findIndex((item) => item === e.target.textContent)
        const index = this.isIndex
        this.$store.dispatch('setIndex',index)
        this.__clickSwiper(index) //点击分类左移
      },
      rotateIcon () {
        this.switchIcon = !this.switchIcon
      },
      __clickSwiper (index) {
        if(index !== 0){
          const ul = document.querySelector('.tabWrap')
          const lis = ul.querySelectorAll('li')
          const liWidth = lis[0].offsetWidth
          const width =  -(this.isIndex/(ul.offsetWidth/30) * 1000) - (liWidth * this.isIndex) +40  + 'px'
          ul.style.transform = `translateX(${width})`
        }
      }
    },
    components: {HeaderBottom},


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #headerContainer
    width 100%
    height 148px
    /*background deeppink*/
    .line
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      box-sizing border-box
      padding 0 22px
      .logo
        float left
      .m-topSearchIpt
        float left
        width 441px
        height 56px
        line-height 56px
        border-radius 10px
        background #ededed
        font-size 28px
        color #666
        margin-left 5px
        text-align center
        box-sizing border-box
      .icon
        display inline-block
        vertical-align middle
        width 32px
        height 32px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
        background-repeat no-repeat
        margin-right -5px

      .loginBtn
        width 70px
        height 38px
        line-height 38px
        border 1px solid #b4282d
        border-radius 10px
        text-align center
        color #b4282d


</style>
