<template>
  <div class="goods">
    <div v-for="(item, i) in goods" :key="i" class="goods-item">
      <a :href="item.href">
        <img :src="item.img" alt="" class="goods-image" @load="imgLoad">
        <div class="goods-title">{{item.title}}</div>
        <span class="goods-price">{{item.price}}</span>
        <img class="fav-icon" src=@/assets/img/fav_icon.png alt="">
        <span>{{item.fav}}</span>
        <i class="add" @click="addCart($event, item)"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsView",
  data(){
    return {
      ifEmitImgLoad: false
    }
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad(){
      this.ifEmitImgLoad = false
      setTimeout(() => {
        this.ifEmitImgLoad = true
      },500)
      this.ifEmitImgLoad && this.$emit("imgLoad")
    },
    addCart(e, item){
      e.preventDefault()
      e.stopPropagation()
      this.$store.commit('addCart', item)
      this.$emit("addCart", "添加购物车成功")
    }
  }
}
</script>

<style lang="scss" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  .goods-item{
    width: 47.5%;
    margin-top: 1.5rem;
    overflow: hidden;
    position: relative;
    .goods-image{
      border-radius: 0.5rem;
    }
    .fav-icon{
      width: 1.6rem;
      margin: 0 0.2rem 0 1rem;
    }
    .goods-title{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
    .goods-price{
      color: var(--color-high-text);
    }
    .add{
      position: absolute;
      display: inline-block;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
      background: url("../../../assets/img/add.png") no-repeat;
      background-size: cover;
      right: 0.5rem;
      bottom: 0;
      z-index: 101;
    }
  }
}
</style>
