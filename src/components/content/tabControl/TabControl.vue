<template>
  <div class="tab-control" ref="tabControl">
    <div v-for="(item, index) in tabs" :key="index"
      @click="tabClick(index)" :class="{active:index == currentIndex}" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex: 0,
      oldIndex: 0
    }
  },
  props: {
    tabs: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    tabClick(index){
      this.oldIndex = this.currentIndex
      this.currentIndex = index
      this.$emit("tabChange", index, this.oldIndex)
    }
  },

}
</script>

<style lang="scss">
.tab-control{
  width: 100%;
  display: flex;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.5rem;
  text-align: center;
  position: fixed;
  background: #fff;
  z-index: 101;
  .tab-control-item{
    flex: 1;
    span{
      padding: 0.5rem;
    }
    &.active{
      color: var(--color-high-text);
      span{
        border-bottom: 0.2rem solid var(--color-tint);
      }
    }
  }
}
</style>
