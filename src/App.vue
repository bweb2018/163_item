<template>
  <div id="app">
    <router-view/>
    <Foot v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import Foot from './components/Foot/Foot.vue'
  import '../static/font_nd1c1we5axh/iconfont.css'
  export default {
    components: {
      Foot
    },
    beforeRouteEnter:(to,from,next)=>{
      next(vm=>{
        alert(vm);
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html
    width 100%
    height 100%
    body
      width 100%
      height 100%
      #app
        width 100%
        height 100%
</style>
