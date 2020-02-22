<template>
  <div id="profile">
    <nav-bar>
      <div slot="center">我的档案</div>
    </nav-bar>
    <home-scroll>
    </home-scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import HomeScroll from "components/common/bscroll/Bscroll";

export default {
  name: "profile",
  data(){
    return {
      testData: 4
    }
  },
  components: {
    HomeScroll,
    NavBar
  },
  computed: {
    
  },
  created () {
    console.log(this.$store.state.goodsList)
   
  },
  methods: {
  }
}
</script>
<style scoped>
.nav-bar{
      background: var(--color-tint);
      position: fixed;
      top: 0;
      z-index: 101;
    }
#profile{
  padding-top: 4.4rem;
}
</style>
