<template>
  <div class="searchContainer">
    <div class="search">
      <div class="s-input-wrap">
        <div class="icon"></div>
        <mt-search v-model="searchKey" placeholder="搜索" @input="search" cancel-text = ''>

        </mt-search>
      </div>
      <span @click="$router.back()">取消</span>
    </div>
    <ul class="search-context-show" v-if="sources.length">
      <li class="s-list" v-for="(sourec,index) in sources">{{sourec}}</li>
    </ul>
    <div class="default-info" v-show="!sources.length">
      <div class="nav">
        <h3 class="hot-search">热门搜索</h3>
      </div>
      <div class="s-content">
        <span class="c-txt" v-for="(text,index) in context" :key="index">{{text}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import Vue from 'vue'
import { Search } from 'mint-ui'
import _ from 'lodash'

Vue.component(Search.name, Search)
  export default {

    data () {
      return {
        context: ['买10得60 回馈金','网红 烟管裤','防滑拖鞋19.9元','电动牙刷 69元起',
          '华夫饼机降69元','按摩电器','POLO衫仅71元','美食3.9元起','行李箱6.5折起','儿童运动鞋',
          '苹果手机配件','优雅女包上新','热销 茶水分离杯'],
        searchKey: '',
        sources: []
      }

    },
    props: [],
    computed: {
      ...mapState({
        index: state => state.home.index,
        backSearchData: state => state.search.backSearchData
      })
    },
    methods: {
      search: _.debounce(

        function () {
         this.sources = []

         _.remove(this.sources, function (n) {

            return n === null;
          })

          let sendInfo = this.searchKey
          const fn = (data) => {
            this.sources = data
          }
          this.$store.dispatch('searchData',{sendInfo,fn})
        })
    },
    watch: {
      backSearchData () {
        this.sources = this.backSearchData
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .searchContainer
    position absolute
    width 100%
    height 100%
    box-sizing border-box
    z-index 130!important
    background #f4f4f4
    .search
      width 100%
      height 88px
      box-sizing border-box
      padding 0 30px
      display flex
      align-items center
      background #fff
      .s-input-wrap
        float left
        width 604px
        height 56px
        box-sizing border-box
        padding 0 20px
        background #f4f4f4
        display flex
        align-items center
        .mint-searchbar
          width 500px
          height 56px
          line-height 56px
          .mint-searchbar-inner
            height 56px
            .mint-searchbar-core
              width 100%
              height 40px
              background #f4f4f4
              outline none

        .icon
          width 28px
          height 28px
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
          background-repeat no-repeat
          margin-right 16px
      span
        float right
        font-size 28px
        color #333
        margin-left 30px
    .nav
      width 750px
      height 90px
      line-height 90px
      margin 0 auto
      padding-left 30px
      background #fff
      box-sizing border-box
      .hot-search
        width 112px
        height 41px
        float left
        font-size 28px
        color #999

    .s-content
      width 750px
      height 398px
      box-sizing border-box
      padding 0 30px 30px 30px
      background #fff
      .c-txt
        display inline-block
        float left
        height 47px
        line-height 47px
        font-size 24px
        color #333
        padding 0 15px
        margin 0 30px 30px 0
        border 1px solid #999
        &:first-child
          color #b4282d
          border 1px solid #b4282d
        &:nth-child(9){
          color #b4282d
          border 1px solid #b4282d
        }

    .search-context-show
      width 100%
      height 1234px
      box-sizing border-box
      .s-list
        width 100%
        box-sizing border-box
        padding 20px 30px
        font-size 30px
        background #fff
        color #333
        border-bottom 1px dashed #f4f4f4
        &:nth-child(2n)
          color red



</style>
