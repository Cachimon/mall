<template>
  <swiper :options="swiperOption">
　　  <swiper-slide v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-slide>
  </swiper>
</template>
<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      swiperOption: {
　　      pagination: {
　　　　      el: '.swiper-pagination',
　　　　      clickable: true // 允许点击小圆点跳转
　　      },
　　      autoplay: {
　　　　      delay: 3000,
　　　　      disableOnInteraction: false // 手动切换之后继续自动轮播
　　      },
　　      //loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
　　      /*navigation: {
　　　　      nextEl: '.swiper-button-next',
　　　　      prevEl: '.swiper-button-prev'
　　      }*/
      },
    }
  },
  
}
</script>

<style lang="scss">

</style>
