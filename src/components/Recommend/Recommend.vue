<template>
  <section class="recommend">
    <div v-show="index === 0">
      <div class="wrap">
        <div class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(shop ,index) in reqShopsData.focusList" :key="index">
              <img class="img" :src="shop.picUrl" alt="">
            </li>
          </ul>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <ul class="g-grow">
        <li class="item" v-for="(item,index) in reqShopsData.policyDescList" :key="index">
          <a>
            <i class="u-icon" :style="{'background-image' : `url(${item.icon})`}"></i>
            <span class="text" style="background-color:#FFFFFF;color:#B4282D;">{{item.desc}}</span>
          </a>
        </li>

      </ul>
      <ul class="kingkongCarousel">
        <li class="kingkong" v-if="kingKongList.length" v-for="(king,index) in kingKongList" :key="index">
          <img :src="king.picUrl" alt="">
          <span>{{king.text}}</span>
        </li>
      </ul>
      <div class="m-freshmanModule">
        <div class="moduleTitle">
          <span class="txt">新人专享礼</span>
        </div>
        <div class="content">
          <a class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <div class="m-lazyload img m-lazyload-loaded" >
              <img data-original="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"
                   data-src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" class="swiper-lazy"
                    src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"
                   style="display: inline;">
            </div>
            <div class="animate">
            </div>
          </div>
        </a>
          <div class="right">
            <div class="module1">
              <a class="m-activityItem">
                <div class="picWrap">
                  <div class="m-lazyload pic m-lazyload-loaded">
                    <img
                      data-original="http://yanxuan.nosdn.127.net/682abe04e8f14e9833a51a0a452a6a51.png?imageView&amp;thumbnail=200x200&amp;quality=75"
                      data-src="http://yanxuan.nosdn.127.net/682abe04e8f14e9833a51a0a452a6a51.png?imageView&amp;thumbnail=200x200&amp;quality=75"
                      class="swiper-lazy" data-reactid=".0.4.2.1.1.0.0.0.0.0"
                      src="http://yanxuan.nosdn.127.net/682abe04e8f14e9833a51a0a452a6a51.png?imageView&amp;thumbnail=200x200&amp;quality=75"
                      style="display: inline;">
                  </div>
                </div>
                <div class="cnt">
                  <div class="title">福利社</div>
                  <div class="subTitle">今日特价</div>
                  <span></span></div>
              </a></div>
            <div class="module2">
              <a class="m-activityItem">
                <div class="picWrap">
                  <div class="m-lazyload pic m-lazyload-loaded">
                    <img data-original="http://yanxuan.nosdn.127.net/b60e3b6a07a7a1673c82b0c1e1104382.png?imageView&amp;thumbnail=200x200&amp;quality=75"
                    data-src="http://yanxuan.nosdn.127.net/b60e3b6a07a7a1673c82b0c1e1104382.png?imageView&amp;thumbnail=200x200&amp;quality=75"
                    class="swiper-lazy"
                    src="http://yanxuan.nosdn.127.net/b60e3b6a07a7a1673c82b0c1e1104382.png?imageView&amp;thumbnail=200x200&amp;quality=75"
                    style="display: inline;"></div>
                </div>
                <div class="cnt">
                  <div class="title">新人拼团</div>
                  <div class="tag">1元起包邮</div>
                </div>
              </a></div>
          </div>
        </div>
      </div>

      <!--品牌制造商直供-->
      <div>
        <CommonHeader text="品牌制造商直供"/>
        <CommonContent/>
      </div>
      <!--类目热销榜-->

      <CommonHeader text="类目热销榜"/>
      <div class="hot-class">
        <ul class="hot-top-list">
          <li class="top-list" v-for="(category,index) in categoryTopData" :key="index">
            <span class="top-txt">{{category.categoryName}}</span>
            <div class="top-icon"><img :src="category.picUrl" alt=""></div>
          </li>
        </ul>
        <ul class="hot-bot-list">
          <li class="bot-list" v-for="(tcategory,index) in categoryBotData" :key="index">
            <span class="bot-txt">{{tcategory.categoryName}}</span>
            <div class="bot-icon"><img :src="tcategory.picUrl" alt=""></div>
          </li>
        </ul>
      </div>
      <!--人气推荐-->
      <CommonHeader text="人气推荐"/>
      <div class="popularity"  v-for="(popular, index) in popularData" :key="index">
        <div class="p-top">
          <img :src="popular.scenePicUrl" alt="">
          <span class="p-name">{{popular.name}}</span>
          <span class="desc">{{popular.simpleDesc}}</span>
          <span class="price">{{popular.counterPrice}}</span>
        </div>
        <ul class="p-bottom">
          <li class="p-swiper" v-for="(popularTwo , index) in popularTwoData" :key="index">
            <img :src="popularTwo.scenePicUrl" alt="">
            <span class="name">{{popularTwo.name}}</span>
            <span class="t-left">￥{{popularTwo.retailPrice}}</span>
            <p class="b-left" v-for="(popularTwo,index) in popularTwo.itemTagList" :key="index">{{popularTwo.name}}</p>
            <!--<p class="left">{{popularTwo.itemTagList[2].name}}</p>-->
          </li>
        </ul>
      </div>

      <!--限时购-->
      <CommonHeader text="限时购"/>
      <div class="cnt">
        <ul class="cnt-list" v-for="(item,index) in cnt" :key="index">
          <li class="list">
            <img :src="item.url" alt="">
            <div class="c-txt">
              <span class="c-t-left">￥{{item.price}}</span>
              <span class="c-t-right"></span>
            </div>
          </li>
        </ul>
      </div>
      <!--新品首发-->
      <CommonHeader text="新品首发"/>
      <div class="new-item">
        <ul class="cnt-list" v-for="(item,index) in newItemList" :key="index">
          <li class="list">
            <img :src="item.primaryPicUrl" alt="">
            <div class="c-txt">
              <span class="c-t-left">{{item.name}}</span>
              <span class="c-t-right">￥{{item.counterPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/f7f7458cf89b32b8f98b5eb525cca105.png?imageView&thumbnail=750x0&quality=75'/>
      <CommonItemLIst :itemListOne="itemListF" classD="itemsContainer"/>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/f64270dfb7410b7b17a1e8232db144ff.png?imageView&thumbnail=750x0&quality=75'/>
      <CommonItemLIst :itemListOne="itemListTwo" classD="itemsContainer"/>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/ee37f4a602c9f6d26c41d8f160990654.jpg?imageView&thumbnail=750x0&quality=75'/>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/2fa47eef701d3fa517285a2f5c28c9f0.jpg?imageView&thumbnail=750x0&quality=75'/>
      <CommonItemLIst :itemListOne="itemListOne" classD="itemsContainer"/>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/92aefb1aaefff5f50641f0f7997112ee.jpg?imageView&thumbnail=750x0&quality=75'/>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/2efab498ee9c1cd9f6efe05b044c2284.jpg?imageView&thumbnail=750x0&quality=75'/>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/34e30352da5a39356c8325b97412fbd7.jpg?imageView&thumbnail=750x0&quality=75'/>
      <CommonItemLIst :itemListOne="itemListS" classD="itemsContainer"/>
      <CommonBanner ur='https://yanxuan.nosdn.127.net/fc2388e61c4e083924689c889987cc10.jpg?imageView&thumbnail=750x0&quality=75'/>
      <!---->
      <!--页底-->
      <div class="r-bottom">
        <div class="bd">
          <a href="/downloadapp?_stat_from=web_out_pz_baidu_1&amp;appAwakeUrl=http%3a%2f%2fm.you.163.com"
             class="goApp w-button w-button-ghost w-button-s" data-reactid=".0.9.0.0.0">下载APP</a>
          <a href="https://you.163.com?_m_forcepc_=true&amp;_m_anonid_=5b033bf8-d83f-4ee6-97a3-debcdcf24946"
             class="goWeb w-button w-button-ghost w-button-s" data-reactid=".0.9.0.0.1">电脑版</a>
        </div>
        <p class="copyright">
          <span>网易公司版权所有 © 1997-</span>
          <span>2019</span><br data-reactid=".0.9.0.1.2">
          <span>食品经营许可证：JY13301080111719</span></p>
      </div>
    </div>
    <!--轮播-->

  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import  Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import CommonHeader from '../CommonHeader/CommonHeader.vue'
  import CommonContent from '../CommonContent/CommonContent.vue'
  import CommonBanner from '../CommonBanner/CommonBanner.vue'
  import CommonItemLIst from '../../components/CommonItemLIst/CommonItemLIst.vue'
  export default {
    data () {
      return {
        categoryTopData: [],
        categoryBotData: [],
        popularData: [],
        popularTwoData: [],
        cnt: [
          {price: 79,url:'http://yanxuan.nosdn.127.net/62383e6a557b617b40ae2b49d0483c88.png?imageView&thumbnail=216x216&quality=75',
          },
          {price: 968,url:'http://yanxuan.nosdn.127.net/67744653917b96ba89578882b83944a2.png?imageView&thumbnail=216x216&quality=75',
          },
          {price: 1499,url: 'http://yanxuan.nosdn.127.net/72d60d5b57b32a23c45b6329e0afb26c.png?imageView&thumbnail=216x216&quality=75',

          },
          {price: 599,url: 'http://yanxuan.nosdn.127.net/ad06783867d44a655265fc40160900bf.png?imageView&thumbnail=216x216&quality=75',

          },
          {price: 2499,url: 'http://yanxuan.nosdn.127.net/7a4d2ae6490b40f2782d268472749993.png?imageView&thumbnail=216x216&quality=75',

          },
          {price: 179,url: 'http://yanxuan.nosdn.127.net/6f1fb38e32257756969042173c290053.png?imageView&thumbnail=216x216&quality=75'

          },

        ],
        newItemList: [],
        itemListOne: [],
        itemListTwo: [],
        itemListS: [],
        itemListF: [],
        kingKongList: []
      }
    },
    props: [],
    computed: {
      ...mapState({
        reqShopsData: state => state.home.wangData,
        index: state => state.home.index,
      }),

    },
    mounted () {
      this.$store.dispatch('reqWangData', () => {
        this.__categoryList ()
        this.$nextTick(() => {
          const mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
              el: '.swiper-pagination',
            },
          })
          let wrapper = document.querySelector('.recommend')
          let scroll = new BScroll(wrapper, {
            scrollY: true,
            scrollbar: true,
            click: true
          })
        })
      })
    },
    components: {CommonHeader,CommonContent,CommonBanner,CommonItemLIst},
    methods: {
      __categoryList () {
        this.categoryTopData = this.reqShopsData.categoryHotSellModule.categoryList.filter((item,index) => index <= 1 )
        this.categoryBotData = this.reqShopsData.categoryHotSellModule.categoryList.filter((item,index) => index > 1)
        this.popularData = this.reqShopsData.popularItemList.filter((item,index) => index < 1)
        this.popularTwoData = this.reqShopsData.popularItemList.filter((item,index) => index >= 1)
        this.newItemList = this.reqShopsData.newItemList.filter((item,index) => index <= 5)
        this.itemListOne = this.reqShopsData.categoryModule.filter((item,index) => index === 2)
        this.itemListTwo = this.reqShopsData.categoryModule.filter((item,index) => index === 1)
        this.itemListS = this.reqShopsData.categoryModule.filter((item,index) => index === 0)
        this.itemListF = this.reqShopsData.categoryModule.filter((item,index) => index === 3)
        this.kingKongList = this.reqShopsData.kingKongModule.kingKongList
      },

    },
    watch: {
      reqShopsData () {
        this.__categoryList ()
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .recommend
    width 100%
    height 1086px
    overflow hidden
    .wrap
      width 100%
      height 370px
      box-sizing border-box
      background #666!important
      overflow hidden
      .swiper-wrapper
        float left
        display flex
        height 100%
        .swiper-slide
          display flex
          float left
          width 750px
          height 370px
          .img
            display inline
            width 750px
            height 370px

      .swiper-pagination
        bottom 30px
        span
          width 40px
          height 5px
          border-radius 10%
          opacity .4
          background #fff
          &.swiper-pagination-bullet-active
            opacity 1
            background #fff
    .g-grow
      width 100%
      height 72px
      padding 0px 30px
      display flex
      align-items center
      box-sizing border-box
      .item
        width 228px
        height 36px
        line-height 36px
        vertical-align middle
        .u-icon
          float left
          width 32px
          height 32px
          background-size 32px
        .text
          margin-left 8px

    .kingkongCarousel
      width 100%
      height 373px
      background #fafafa
      box-sizing border-box
      margin-bottom 20px
      .kingkong
        float left
        padding 10px 20px
        display flex
        justify-content center
        align-items center
        flex-direction column
        img
          width 110px
          height 110px
        span
          margin-top 10px
          text-align center
          font-size 24px
          color #333
    .r-bottom
      width 100%
      height 244px
      padding 54px 20px 28px
      background #444
      box-sizing border-box
      text-align center
      .bd
        width 710px
        height 62px
        line-height 62px
        box-sizing border-box
        a
          display inline-block
          height 100%
          width 172px
          font-size 24px
          color #fff
          border 1px solid #999
          &:first-child
            margin-right 50px

      .copyright
        width 710px
        height 64px
        margin-top 40px
        font-size 24px
        color #999
    .m-freshmanModule
      width 100%
      height 558px
      box-sizing border-box
      margin 20px 0
      padding-bottom 30px
      .moduleTitle
        width 100%
        height 90px
        line-height 90px
        padding 0 30px
        box-sizing border-box
        font-size 32px
        color #333
        text-align center
        .txt::before
          content ''
          display inline-block
          width 24px
          height 3px
          margin 0 12px 10px 0
          background-color #333
        .txt::after
          content ''
          display inline-block
          width 24px
          height 3px
          margin 0 0 10px 12px
          background-color #333


      .left
        float left
        width 343px
        height 434px
        background #F9E9CF
        margin 0 4px 0 30px
        .name
          width 100%
          height 78px
          line-height 50px
          box-sizing border-box
          padding 30px 0 0 30px
          font-size 32px
        img
          width 258px
          height  258px
          margin 40px 42px 0
      .right
        width 343px
        height 434px
        float left
        .module1
          width 100%
          height 215px
          float left
          background #FBE2D3
          margin 0 4px 4px 0
          .m-activityItem
            float left
            width 100%
            height 215px
            margin 0 4px 4px 0
            padding 20px 0 0 30px
            box-sizing border-box
            .picWrap
              float right
              width 200px
              height 200px
              box-sizing border-box
              img
                float right
            .cnt
              .title
                width 313px
                height 48px
                font-size 32px
                color #333
              .subTitle
                width 313px
                height 48px
                font-size 24px
                color #7f7f7f



        .module2
          float left
          background #FFECC2
          width 100%
          height 215px
          margin 0 4px 4px 0
          .m-activityItem
            position relative
            padding 20px 0 0 30px
            width 100%
            height 215px
            float left
            box-sizing border-box
            .picWrap
              width 200px
              height 200px
              float right
              img
                float right
            .cnt
              .title
                position absolute
                left 30px
                top 20px
                width 313px
                height 50px
                font-size 34px
                color #333
              .tag
                position absolute
                top 60px
                left 30px
                width 120px
                height 32px
                font-size 24px
                color #fff
                background #cbb693
    .hot-class
      width 100%
      height 610px
      box-sizing border-box
      padding 0 20px 20px 30px
      .hot-top-list
        width 100%
        height 200px
        .top-list
          float left
          width 340px
          height 200px
          background #f9f3e4
          margin 0 10px 10px 0
          font-size 28px
          color #333
          display flex
          justify-content center
          align-items center
          &:last-child
            background #ebeff6
          img
            width 200px
            height 200px
            float right
            margin-top -24px
      .hot-bot-list
        width 100%
        .bot-list
          float left
          width 165px
          height 180px
          background #f5f5f5
          margin 0 10px 10px 0
          font-size 24px
          color #333
          display flex
          justify-content center
          flex-direction column
          align-items center
          img
            margin-top 6px
            width 120px
            height 120px
    .popularity
      width 100%
      height 684px
      box-sizing border-box
      margin-bottom 20px
      padding-bottom 30px
      .p-top
        width 690px
        height 280px
        margin 0 30px 20px
        background #FEF0DF
        box-sizing border-box
        img
          width 280px
          height 280px
          float left
        .p-name
          padding-top 80px
          display block
          color #333
          font-size 28px
          height 46px
          line-height 46px
        .desc
          display block
          color #7f7f7f
          font-size 24px
          height 36px
          line-height 36px
          margin-bottom 5px
        .price
          color #b42842
      .p-bottom
        position relative
        width 740px
        height 354px
        box-sizing border-box
        .p-swiper
          width 216px
          height 354px
          box-sizing border-box
          padding-bottom 13px
          margin-left 20px
          float left
          img
            width 216px
            height 216px
          .name
            width 205px
            height 68px
            font-size 24px
            color #333
          .t-left
            display inline-block
            color #b4282d
          .b-left
            display inline-block
            font-size 24px
            color #ce2424

    .cnt
      width 100%
      height 600px
      box-sizing border-box
      padding 0 10px 0 30px
      .cnt-list
        width 216px
        height 300px
        box-sizing border-box
        margin-right 20px
        padding-bottom 30px
        float left
        img
          width 216px
          height 216px
          background #eee
        .c-txt
          width 216px
          height 4px
          font-size 28px
          padding-left 20px
          color #b42842
          padding-top 15px

    .new-item
      width 100%
      height 600px
      box-sizing border-box
      padding 0 10px 0 30px
      .cnt-list
        width 216px
        height 300px
        box-sizing border-box
        margin-right 20px
        padding-bottom 30px
        float left
        img
          width 216px
          height 216px
          background #eee
        .c-txt
          width 216px
          height 72px
          line-height 30px
          font-size 24px
          .c-t-left
            color #333
          .c-t-right
            font-size 20px
            color #b42842



</style>
