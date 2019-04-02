<template>
  <div class="headerBottom">
    <div class="headerList">
      <ul class="tabWrap" >
        <li @click="addBorder" :class="{on: isIndex === index}" class="tab"  v-for="(king , index) in kingKongList" :key="index">
          <span>{{king}}</span>
        </li>
        <!--<li  class="tab" v-for="(king,index) in homeData.kingKongModule.kingKongList" :key="index">-->
        <!--<span>{{king.text}}</span>-->
        <!--</li>-->

      </ul>
    </div>
    <div class="toggle" @click="rotateIcon">
      <div class="icon" :class="{on: switchIcon}">
      </div>
    </div>
    <div class="toggles" v-show="switchIcon" :class="{on: switchIcon}">
      <p class="all">全部频道</p>
      <ul class="toggleList">
        <li @click="addBorder" :class="{on: isIndex === index}" class="list"  v-for="(king , index) in kingKongList" :key="index">
          <span>{{king}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      switchIcon: Boolean,
      kingKongList: Array,
      isIndex: Number,
      addBorder: Function,
      rotateIcon: Function
    },
    methods: {
      setIndex (index) {
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerBottom
    position relative
    width 100%
    height 60px
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
    .toggle
      position absolute
      right 0px
      top 0px
      width 120px
      height 60px
      float right
      background white
      display flex
      align-items center
      justify-content center
      z-index 110!important
      .icon
        float right
        width 30px
        height 30px

        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
        background-repeat no-repeat
        &.on
          transform rotate(180deg)
          transition transform rotate .5s
    /*transform-origin center bottom*/
    .toggles
      position absolute
      left 0
      top 0
      z-index 100!important
      background #fff
      .all
        padding-left 30px
        width 750px
        height 60px
        line-height 60px
        font-size 28px
        color #333
      .toggleList
        width 100%
        height 310px
        padding-top 20px
        box-sizing border-box
        .list
          display flex
          align-items center
          justify-content center
          float left
          width 144px
          height 56px
          border 1px solid #ccc
          margin 0 0 38px 32px
          background #FAFAFA
          span
            display inline-block
            height 60px
            line-height 60px
            font-size 26px
            color #333


</style>
