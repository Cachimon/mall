<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar"
export default {
  name: "App",
  components: {
    MainTabBar
  },
  data(){
    return {
      goodsList: {
        pop: [],
        new: [],
        sell: [],
        type: ["pop", "new", "sell"]
      },
      type: "pop",
    }
  },
  created(){
    this.getAllGoodsList()

  },
  methods: {
    getAllGoodsList() {
      this.goodsList.type.forEach(type => {
        this.$store.dispatch("action", type).then(res => {
          this.goodsList[type] = res
        });
      });
    },
  }
}
</script>
<style>
  @import "assets/css/base.css";
  @import 'assets/css/swiper.css';
</style>
<style lang="scss">

</style>
