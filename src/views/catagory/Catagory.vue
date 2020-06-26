<template>
  <div id="category">
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>
    <aside-tab class="aside-tab" @changeCateType="changeCateType"></aside-tab>
    <tab-control
      @tabChange="changeType"
      :tabs="['流行', '新款', '精选']"
      ref="tabControl1"
      v-show="tabControl1Show"
      class="tab-control"
    ></tab-control>
    <home-scroll class="container" ref="HomeScroll" @scrolling="onScrolling">
      
      <cate-main :currentCateList="activeCateList" class="cate-main" @imgLoad="scrollRefresh"></cate-main>
      <tab-control @tabChange="changeType" :tabs="['流行', '新款', '精选']" ref="tabControl2" class="tab-control"></tab-control>
      <goods-view :goods="goods" @imgLoad="scrollRefresh" class="goods-view"></goods-view>
    </home-scroll>
  </div>
</template>

  
<script>
import HomeScroll from "components/common/bscroll/Bscroll";
import NavBar from "components/common/navbar/NavBar"
import AsideTab from "./childComp/AsideTab"
import CateMain from "./childComp/CateMain"
import {getCateData} from 'network/category'
import TabControl from "components/content/tabControl/TabControl"
import GoodsView from "components/content/goods/GoodsView"

export default {
  name: "catagory",
  data(){
    return{
      tabType: ["pop", "shirt", "pants", "dress", "uw", "female_shoes", "bf", "bags", "sports",
        "accessories", "makeup", "personal_care", "home"],
      cateList: {
        pop: [],
        shirt: [],
        pants: [],
        dress: [],
        uw: [],
        "female_shoes": [],
        bf: [],
        bags: [],
        sports: [],
        accessories: [],
        makeup: [],
        "personal_care": [],
        home: []
      },
      activeCateList: [],
      goodsList: {
        pop: [],
        new: [],
        sell: [],
        type: ["pop", "new", "sell"]
      },
      type: "pop",
      currentScrollY: 0,
      tabControl1Show: false,
      tabControlOffsetTop: 610,
      itemId: 0
    }
  },
  computed: {
    goods() {
      return this.goodsList[this.type];
    }
  },
  components: {
    HomeScroll,
    NavBar,
    AsideTab,
    CateMain,
    TabControl,
    GoodsView,
  },
  created(){
    this.getAllCateList()
    
  },
  mounted(){
    this.getAllGoodsList()
  },
  methods: {
    getAllCateList(){
      for(let cateType of this.tabType){
        getCateData(cateType).then(res => {
          this.cateList[cateType] = res.data
          if(cateType === "pop"){
            this.activeCateList = this.cateList.pop
          }
        })
      }
    },
    changeCateType(currentCateType){
      this.activeCateList = this.cateList[currentCateType]
      this.scrollRefresh()
      let tabOffsetTop = this.$refs.tabControl2.$el.offsetTop - this.$refs.tabControl2.$el.offsetHeight
      this.tabControl1Show = tabOffsetTop < this.tabControlOffsetTop
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop - this.$refs.tabControl2.$el.offsetHeight
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
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop - this.$refs.tabControl2.$el.offsetHeight
    },
    onScrolling(pos) {
      this.tabControl1Show = -pos.y > this.tabControlOffsetTop;
    },
    changeType(index, oldIndex) {
      this.type = this.goodsList.type[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
  },
  activated() {
    this.$refs.HomeScroll.scroll.refresh(); //防止better-scroll的bug
    this.$refs.HomeScroll.scroll.scrollTo(0, this.currentScrollY);
  },
  deactivated() {
    this.currentScrollY = this.$refs.HomeScroll.scroll.y;
  }
};
</script>
<style scoped>
#category{
  padding-top: 4.4rem;
}
.nav-bar{
      background: var(--color-tint);
      position: fixed;
      top: 0;
      z-index: 101;
    }
.aside-tab{
  position: fixed;
  left: 0;
  z-index: 110;
}
.container {
    height: calc(100vh - 9.3rem);
    overflow: hidden;
}
.goods-view, .tab-control, .cate-main{
  padding-left: 8rem;
  box-sizing: border-box;
}
</style>
