<template>
  <div class="banner" :style="{'background': `url(${ur})`}">
  </div>
</template>

<script>

  export default {

    props: {
      ur: String
    },

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner
    width 100%
    height 370px
    box-sizing border-box
    margin-bottom 20px
    img
      width 100%
</style>
