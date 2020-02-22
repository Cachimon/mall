<template>
  <div class="cate-main">
    <div v-for="(item, index) in currentCateList" :key="index" class="cate-unit">
      <a :href="item.href">
        <img :src="'http://www.cachimon.top/mogujie/'+item.img" :alt="item.title" @load="imgLoad">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "CateMain",
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
      currentIndex: "pop",
      cateId: 0
    }
  },
  props: {
    currentCateList: {
      type: Array,
      default: []
    }
  },
  created(){
  },
  methods: {
    asideClick(index){
      this.currentIndex = index
    },
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
};
</script>
<style scoped lang="scss">
.cate-main{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  .cate-unit{
    width: 30%;
    margin-top: 2rem;
    img{
      width: 70%;
    }
  }
}
</style>
