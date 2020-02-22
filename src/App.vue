<template>
  <div id="app">
    <!--<div id="tab_bar">
      <router-link to="/home" tag="button" replace>Home</router-link> |
      <router-link to="/about" tag="button" replace>About</router-link> |
      <router-link :to="'/user/'+ userId" tag="button" replace>User</router-link> |
      <router-link :to="{path: '/profile/', query: {name: 'why', age: 18}}" tag="button" replace>profile</router-link>
      <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button>
    </div>-->
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
      userId: "zhangsan"
    }
  },
  methods: {
    homeClick(e){
      //this.$router.push('./home')
      this.$router.replace('./home')
    },
    aboutClick(){
      //this.$router.push('./about')
      this.$router.replace('./about')
    }
  }
}
</script>
<style>
  @import "assets/css/base.css";
  @import 'assets/css/swiper.css';
</style>
<style lang="scss">

</style>
