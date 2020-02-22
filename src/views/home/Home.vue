<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <top-btn v-show="topBtnShow" @topClick="topClick"></top-btn>
    <p class="addMsg" v-show="ifMsgShow">{{addMsg}}</p>
    <tab-control
      @tabChange="changeType"
      :tabs="['流行', '新款', '精选']"
      ref="tabControl1"
      v-show="tabControl1Show"
    ></tab-control>
    <home-scroll class="container" ref="HomeScroll" @scrolling="onScrolling">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control @tabChange="changeType" :tabs="['流行', '新款', '精选']" ref="tabControl2"></tab-control>
      <goods-view :goods="goods" @imgLoad="scrollRefresh" @addCart="addCart"></goods-view>
    </home-scroll>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import HomeScroll from "components/common/bscroll/Bscroll";
import TopBtn from "components/common/topbtn/TopBtn";
import TabControl from "components/content/tabControl/TabControl";
import GoodsView from "components/content/goods/GoodsView";

import { getHomeMultidata, getGoods } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: [],
        news: [],
        sell: [],
        type: ["pop", "news", "sell"]
      },
      type: "pop",
      tabControlOffsetTop: 610,
      tabControl1Show: false,
      topBtnShow: false,
      currentScrollY: 0,
      posY: 0,
      posX: 0,
      posYOfType: [],
      itemId: 0,
      addMsg: "添加购物车成功",
      ifMsgShow: false
    };
  },
  computed: {
    goods() {
      return this.goodsList[this.type];
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsView,
    HomeScroll,
    TopBtn
  },
  methods: {
    changeType(index, oldIndex) {
      this.type = this.goodsList.type[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    getAllGoodsList() {
      new Promise(resolve => {
        setTimeout(() => {
          resolve()
        },200)
      }).then(() => {
        let flag = false
        this.goodsList.type.forEach(type => {
          this.goodsList[type] = this.$store.state.goodsList[type]
          if(this.goodsList[type].length === 0){
            flag = true
          }
        })
        if(flag === true){
          this.getAllGoodsList()
        }
      })
      
    },
    scrollRefresh() {
      this.$refs.HomeScroll.scroll && this.$refs.HomeScroll.scroll.refresh();
    },
    onScrolling(pos) {
      this.tabControl1Show = -pos.y > this.tabControlOffsetTop;
      this.topBtnShow = -pos.y > 1000;
    },
    topClick() {
      this.$refs.HomeScroll.scroll.scrollTo(0, 0, 500);
    },
    addCart(){
      this.ifMsgShow = true
      setTimeout(() => {
        this.ifMsgShow = false
      },5000)
    }
  },
  created() {
    this.getAllGoodsList();
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }).catch(err => {
      return err
    })
  },
  mounted() {
    
  },
  activated() {
      this.getAllGoodsList();

    this.$refs.HomeScroll.scroll.refresh(); //防止better-scroll的bug
    this.$refs.HomeScroll.scroll.scrollTo(0, this.currentScrollY);
  },
  deactivated() {
    this.currentScrollY = this.$refs.HomeScroll.scroll.y;
  }
 
};
</script>

<style lang="scss" scoped>
#home {
  padding-top: 4.4rem;
  .nav-bar {
    background: var(--color-tint);
    position: fixed;
    top: 0;
    z-index: 101;
  }
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .container {
    height: calc(100vh - 9.3rem);
    overflow: hidden;
  }
}
.addMsg{
  position: fixed;
  bottom: 7rem;
  z-index: 110;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  color: #999;
  animation:show 5s ease-out forwards;
}
@keyframes show{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
