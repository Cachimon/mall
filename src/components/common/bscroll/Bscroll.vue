<template>
  <div class="scroll-wrap" ref=wrapper>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll"
export default {
  name: "bscroll",
  data(){
    return {
      scroll: null,
    }
  },
  methods: {
    
  },
  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    }),
    this.scroll.on("scroll", (pos) => {
      this.$emit("scrolling",pos)
    })
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
      color: var(--color-high-text)
    }
  }
}
</style>
