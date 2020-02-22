<template>
  <div class="top-btn" @click="topClick">
    <img src=@/assets/img/top.svg alt="">
  </div>
</template>
<script>
import Bscroll from "better-scroll"
export default {
  name: "topbtn",
  methods: {
    topClick(){
      this.$emit("topClick")
    }
  },
}
</script>

<style lang="scss" scoped>
.top-btn{
  position: fixed;
  height: 5rem;
  width: 5rem;
  z-index: 101;
  bottom: 6rem;
  right: 1rem;
  text-align: center;
  background: rgba(255,255,255,0.5);
  line-height: 5rem;
  border-radius: 500%;
  img{
    width: 70%;
    vertical-align: middle;
  }
}
</style>
