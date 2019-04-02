<template>
  <div :class="classD">
    <ul class="itemsList">
      <li class="i-item" v-for="(item,index) in handlerItems" :key="index">
        <img :src="item.scenePicUrl" alt="">
        <span class="i-name">{{item.name}}</span>
        <p class="i-txt">￥{{item.counterPrice}}</p>
        <p class="i-txt" v-if="item.itemTagList" v-for="(itemTag,index) in item.itemTagList" :key="index">{{itemTag.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        handlerItems: [],
      }
    },
    props: {
        itemListOne: Array,
        classD: String
    },
//    computed: {
//      handlerItems () {
//          this.handlerItems = this.itemListOne[0].itemList
//      }
//    },
    mounted () {
      this.__reqItems ()
      this.__handlerItems ()
    },
    methods: {
      __reqItems () {
        if(this.itemListOne.length){
          this.handlerItems = this.itemListOne[0].itemList
        }

      },
      __handlerItems () {
        this.$nextTick(() => {
          let wrappert = document.querySelectorAll('.itemsContainer')
          wrappert.forEach((item) => {
            let scroll = new BScroll(item,{
              scrollX: true,
              scrollbar: true,
              click: true
            })
          })
        })
      },
    },
    watch: {
      itemListOne () {
        this.handlerItems = this.itemListOne[0].itemList
        this.__handlerItems ()
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .itemsContainer
    width 100%
    height 355px
    box-sizing border-box
    padding 0 30px 30px 30px
    .itemsList
      height 100%
      float left
      display flex
      .i-item
        width 200px
        height 325px
        margin-right 20px
        float left
        img
          width 200px
          height 200px
          background #f4f4f4
        .i-name
          display block
          font-size 24px
          color #333
          margin 10px 0
        .i-txt
          font-size 24px
          color #b42842
</style>
