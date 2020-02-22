<template>
  <div class="home-feature">
    <a>
      <div class="home-feature-title">本周流行</div>
      <img src=@/assets/img/feature_bg.jpg class="feature-img" alt="">
    </a>
  </div>
</template>
<script>
export default {
  name: "HomeFeature",

}
</script>

<style lang="scss">
.home-feature{
  font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0 2rem 0;
  .home-feature-title{
    margin: 1rem 0;
  }
  
}
</style>
