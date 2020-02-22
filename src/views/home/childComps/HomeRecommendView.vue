<template>
  <div id="home-recommend">
    <div v-for="(item, i) in recommends" :key="i" class="recomend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" class="recommend-image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss">
#home-recommend{
  display: flex;
  width:100%;
  text-align: center;
  font-size:1.5rem;
  padding: 1rem 0 2rem;
  border-bottom: 1rem solid #eee;
  justify-content: space-between;
  .recommend-item{
    flex: 1;
    width: 25%;
  }
  .recommend-image{
    width: 80%;
    margin-bottom: 0.7rem;
  }
}
</style>
