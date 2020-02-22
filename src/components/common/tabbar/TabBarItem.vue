<template>
  <div class="tab-bar-item" @click="changePath">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="textColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff6978"
    }
  },
  data(){
    return {
      //isActive: true
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1;
    },
    textColor(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    changePath(){
      this.$router.replace(this.path);
    }
  }
}
</script>
<style lang="scss">

.tab-bar-item{
  flex: 1;//每一块宽度相同，不必再设宽度，justify-content达不到
  text-align: center;
  height: 4.9rem;
  font-size: 1.4rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-top: 0.3rem;
    vertical-align: middle;
    margin-bottom: 0.2rem;
  }

}
</style>
