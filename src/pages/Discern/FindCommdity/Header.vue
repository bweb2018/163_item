<template>
  <div class="headerList">
    <ul class="tabWrap">
      <li @click="addBorder" :class="{on: isIndex === index}" class="tab"  v-for="(king , index) in kingKongList" :key="index">
        <span>{{king}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
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
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerList
    height 100%
    width 100%
    padding -left 28px
    box-sizing border-box
    padding-right 150px
    overflow hidden
    .tabWrap
      float left
      height 100%
      display flex
      padding 0 15px
      .tab
        display flex
        align-items center
        justify-content center
        float left
        width 144px
        height 60px
        line-height 60px
        margin-left 21px
        &:nth-child(1)
          margin 0 -30px 0 -14px
        &.on span
          color #b4282d
          border-bottom 5px solid #b4282d

        span
          display inline-block
          height 60px
          font-size 28px
          padding 0 8px
          color #333
          box-sizing border-box
</style>
