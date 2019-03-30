<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Foot from './components/Foot/Foot.vue'
  export default {
    components: {
      Foot
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
