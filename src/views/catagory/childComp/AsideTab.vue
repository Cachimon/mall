<template>
  <div>
    <ul class="aside-tab-bar">
      <li v-for="(item, index) in tabTitle" :key="index" @click="asideClick(index)" :class="{active: index == currentIndex}">
        {{item}}
      </li>
    </ul>
  </div>
</template>

  
<script>
export default {
  name: "AsideTab",
  data(){
    return {
      tabTitle: {
        "pop": "正在流行",
        "shirt": "上衣",
        "pants": "裤子",
        "dress": "裙装",
        "uw": "内衣",
        "female_shoes": "女鞋",
        "bf": "男友",
        "bags": "包包",
        "sports": "运动",
        "accessories": "配饰",
        "makeup": "化妆品",
        "personal_care": "日化品",
        "home": "家居"
      },
      currentIndex: "pop"
    }
  },
  created(){
  },
  methods: {
    asideClick(index){
      this.currentIndex = index
      this.$emit("changeCateType", index)
    }
  }
};
</script>
<style scoped lang="scss">
.aside-tab-bar{
  height: calc(100vh - 9.3rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.6rem;
  box-shadow: 0.2rem 0 0.5rem rgba(0,0,0,0.2);
  width: 8rem;
  text-align: center;
  li{
    height: 6rem;
    background: #f6f6f6;
    vertical-align: middle;
    line-height: 4.7rem;
    box-sizing: border-box;
    &.active{
      background: #fff;
      border-left: 0.2rem solid var(--color-high-text);
      color: var(--color-high-text);
    }
  }
}
</style>
