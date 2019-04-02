<template>
  <div>
    <CardHeader title="发现" titleT="甄选家" :path="$route.path"/>
    <router-view/>
  </div>
</template>

<script>
import CardHeader from '../../components/CardHeader/CardHeader.vue'
  export default {
    data () {
      return {
        isSwitch: false
      }
    },
    props: {},
    methods: {
      handlerSwitch () {
        this.isSwitch = !this.isSwitch
      }
    },
    components: {CardHeader}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
