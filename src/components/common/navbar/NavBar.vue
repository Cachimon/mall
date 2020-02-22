<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
}
</script>
<style  lang="scss">
  .nav-bar{
    height: 4.4rem;
    display: flex;
    line-height: 4.4rem;
    text-align: center;
    box-shadow: 0 0.1rem 0.1rem rgba(100,100,100,0.1);
    color: #fff;
    font-size: 1.8rem;
    width: 100%;
    .left,.right{
      width: 6rem;
    }
    .center{
      flex:1;
    }
  }
</style>
