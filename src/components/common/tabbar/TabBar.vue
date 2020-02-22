<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar"
}
</script>
<style lang="scss">
#tab_bar{
  background: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -0.1rem 0.1rem rgba(100,100,100,0.2);
  z-index: 109;
}

</style>
