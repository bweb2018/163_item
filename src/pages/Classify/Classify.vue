<template>
  <div>
    <ClassifySearch/>
    <div class="class-container">
      <div class="c-left" >
        <ul class="class-left-list">
          <li class="left-list" @click="findCategoryDetails(index)" :class="{on: isIndex === index}" v-for="(category,index) in categoryList" :key="index">
            <span>{{category.name}}</span>
          </li>
          <li class="left-list" ></li>
          <li class="left-list" ></li>
          <li class="left-list" ></li>
          <li class="left-list" ></li>
        </ul>
      </div>

      <div class="c-right">
        <div class="img" ></div>
        <div class="r-scroll">
          <ul class="class-right-list">
            <li class="right-list" v-for="(categoryD,index) in categoryDetails" :key="index">
              <img :src="categoryD.wapBannerUrl" alt="">
              <div class="txt">{{categoryD.name}}</div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
import ClassifySearch from '../../components/ClassifySearch/ClassifySearch.vue'
  export default {
    data () {
      return {
        categoryList: [],
        categoryDetails: [],
        isIndex: 0
      }
    },
    props: [],
    mounted () {
      this.$store.dispatch('reqCategory',() => {
        this.categoryList = this.category,
          this.findCategoryDetails(this.isIndex)
       this.$nextTick(() => {
         let wrapper = document.querySelector('.c-left')
         let scroll = new BScroll(wrapper,{
           scrollY: true,
           click: true
         })
       })
       this.$nextTick(() => {
         let wrapper = document.querySelector('.r-scroll')
         console.log(wrapper)
         let scroll = new BScroll(wrapper,{
           scrollY: true,
           click: true
         })
       })
      })
    },
    computed: {
      ...mapState({
        category: state => state.category.category.categoryL1List
      })
    },
    methods: {
      findCategoryDetails (index) {
        this.isIndex = index
        return this.categoryDetails = this.category[index].subCateList
      }
    },
    components: {ClassifySearch}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .class-container
    width 100%
    height 1148px
    box-sizing border-box
    overflow hidden
    .c-left
      width 162px
      height 1120px
      box-sizing border-box
      padding 40px 0
      float left
      .class-left-list
        width 162px
        box-sizing border-box
        .left-list
          width 100%
          height 50px
          margin-top 30px
          text-align center
          box-sizing border-box
          padding-left 5px
          &.on
            box-sizing border-box
            font-size #ab2b2b
            border-left 5px solid #ab2b2b
            span
              color #ab2b2b
          span
            height 49px
            line-height 49px
            font-size 28px
            color #333
    .c-right
      position relative
      width 588px
      height 1148px
      box-sizing border-box
      padding 30px 30px 20px 30px
      margin-left 162px
      .img
        position absolute
        top 0px
        left 30px
        z-index 100
        width 528px
        height 192px
        background-image url(http://yanxuan.nosdn.127.net/d574677c2dede0bf7a8376cc07fa5f64.jpg?imageView&thumbnail=0x196&quality=75)
        background-repeat no-repeat
      .r-scroll
        width 528px
        height 932px
        .class-right-list
          padding-top 150px
          width 528px
          float left
          .right-list
            float left
            margin-left 20px
            img
              width 144px
              height 144px
            .txt
              width 144px
              height 72px
</style>
