<template>
  <div class="discernContainer">
    <header>
      <span class="d-l-icon iconfont icon-home" @click="$router.replace('/home')"></span>
      <div class="textWrap">
        <span class="d-l-txt" @click="handlerSwitch" :class="{on: !isSwitch}">{{title}}</span>
        <span class="d-l-txt" @click="handlerSwitch" :class="{on: isSwitch}">{{titleT}}</span>
      </div>
      <span class="d-r-icon iconfont icon-search" @click="$router.push('/home/search')"></span>
      <span class="d-r-shop-card iconfont icon-caigou-xianxing" @click="$router.replace('/shop')"></span>
    </header>
  </div>
</template>
<script>
  export default {
    props: {title: String, titleT: String , path: String},
    data () {
      return {
        isSwitch: false
      }
    },
    methods: {
      handlerSwitch (e) {
        this.isSwitch = !this.isSwitch
        if(this.path){
          e.target.innerText === '发现' ? this.$router.replace('/discern/findCommdity') : this.$router.replace('/discern/selection')
        }
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .discernContainer
    width 100%
    height 100%
    box-sizing border-box
    header
      width 100%
      height 88px
      line-height 88px
      box-sizing border-box
      background #fafafa
      padding 0 16px 0 24px
      display flex
      .textWrap
        float left
        width 320px
        height 100%
        flex 1
        text-align center
        .d-l-txt
          display inline-block
          font-size 36px
          color #333
          &:last-child
            margin-left 10px
          &.on
            color #b42842
            font-size 42px
      .iconfont
        color #333
        display inline-block
        font-size 50px
      .icon-search
        font-size 60px
        margin-right 30px
      .icon-caigou-xianxing
        font-size 60px



</style>
