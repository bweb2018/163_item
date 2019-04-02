<template>
  <div>
    <Header/>
    <Recommend/>
  </div>
</template>

<script>
  import Recommend from '../../components/Recommend/Recommend.vue'
  import Search from '../Search/Search.vue'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        wangData: {}
      }
    },
    props: [],
    computed: {
      ...mapState({
        wang: state => state.home.wangData,
        index: state => state.home.index
      })
    },
    mounted () {
      this.$store.dispatch('reqWangData')
    },
    beforeRouteEnter (to, from, next) {
      next((e) =>{
        const i = 0
        e.$store.dispatch('setIndex',i)
      })
    },
    components: {Recommend,Search}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
