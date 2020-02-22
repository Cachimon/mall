<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{cartNum}})</div>
    </nav-bar>
    <home-scroll class="container" ref="HomeScroll">
      <div v-for="(item, index) in cartList" :key="index" class="cart-list">
        <i :class="['radio', {check: item.chose}]" @click="choseItem(item)"></i>
        <div class="cart-list-detail">
          <div class="item-img" :style="'background: url('+ item.img + '); background-size:cover'"></div>
          <div class="cart-list-desc">
            <p class="cart-list-title">{{item.title}}</p>
            <div>
              <span class="cart-list-price">{{item.price}}</span>
              <span class="cart-list-amount">{{item.amount}}</span>
            </div>
          </div>
        </div>
      </div>
    </home-scroll>
    <div class="total-count">
      <i :class="['radio', {check: ifSelectAll}]" name="check-all" @click="selectAll"></i>
      <label for="check-all">全选</label>
      <span>合计：￥{{totalPrice}}</span>
      <div class="cart-submit">提交订单({{totalAmount}})</div>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeScroll from "components/common/bscroll/Bscroll";

export default {
  name: "cart",
  data(){
    return {
      cartList: [],
      currentScrollY: 0,
      ifItemChosen: false,
      ifSelectAll: false,
      totalPrice: 0,
      totalAmount: 0,
      cartNum: 0
    }
  },
  components: {
    HomeScroll,
    NavBar
  },
  created(){
    
  },
  computed: {
  },
  methods: {
    scrollRefresh() {
      this.$refs.HomeScroll.scroll && this.$refs.HomeScroll.scroll.refresh();
    },
    choseItem(item){
      this.$store.commit('updateChose', item)
      this.ifSelectAll = this.$store.state.cartSelectAll
      this.count()
    },
    selectAll(){
      this.ifSelectAll = !this.ifSelectAll
      this.$store.commit("selectAll", this.ifSelectAll)
      this.count()
    },
    count(){
      this.totalPrice = 0
      this.totalAmount = this.$store.state.selectedCartList.length
      this.$store.state.selectedCartList && this.$store.state.selectedCartList.forEach(cart => {
        let price = cart.price.slice(1, cart.price.length) - 0
        this.totalPrice += price * cart.amount
      })
    }
  },
  activated() {
    this.$refs.HomeScroll.scroll.refresh(); //防止better-scroll的bug
    this.$refs.HomeScroll.scroll.scrollTo(0, this.currentScrollY);
    this.cartList = this.$store.state.cartList
    this.cartNum = this.$store.state.cartList.length
    this.count()
  },
  deactivated() {
    this.currentScrollY = this.$refs.HomeScroll.scroll.y;
  }
};
</script>
<style scoped lang="scss">
.cart{
  padding-top: 4.4rem;
}
.nav-bar {
  background: var(--color-tint);
  position: fixed;
  top: 0;
  z-index: 101;
}
.total-count {
  position: fixed;
  bottom: 4.9rem;
  left: 0;
  right: 0;
  height: 4.9rem;
  line-height: 4.9rem;
  box-shadow: 0 -0.1rem 0.2rem rgba(0,0,0,0.3);
  font-size: 1.8rem;
  background: #ededed;
  .radio{
    vertical-align: -0.4rem;
    margin-left: 1rem;
  }
  label{
    font-size: 1.6rem;
    margin-left: 0.5rem;
  }
  span{
    margin-left: 2rem;
  }
  .cart-submit{
    position: absolute;
    right: 0;
    top: 0;
    background: #ff5200;
    padding: 0 2rem;
    color: #fff;
  }
}
.container {
    height: calc(100vh - 9.3rem - 4.9rem);
    overflow: hidden;
}
.cart-list{
  height: 15rem;
  display: flex;
  box-shadow: 0 0.1rem 0.1rem rgba(0,0,0,0.3);
  padding: 1rem;
  box-sizing: border-box;
  .radio{
    margin-right: 1rem;
    margin-top: 13rem / 2 - 1rem;
    flex: 0 0 2rem;
  }
  .cart-list-detail{
    display: flex;
    justify-content: space-around;
    .item-img{
      height: 12rem;
      width: 10rem;
      border-radius: 1rem;
      flex:0 0 10rem;
    }
    .cart-list-desc{
      font-size: 1.7rem;
      padding-left: 1rem;
      box-sizing: border-box;
      position: relative;
      p{
        height: 6rem;
        line-height: 3rem;
        overflow: hidden;
      }
      div{
        width:100%;
        position: absolute;
        bottom: 1rem;
        padding-right: 2rem;
        display: flex;
        justify-content: space-between;
        .cart-list-amount{
          background-image: url("../../assets/img/plus.png");
          background-size: 1.5rem 1.8rem;
          background-repeat: no-repeat;
          padding-left: 1.7rem;
        }
      }
    }

  }
}
.radio {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: #fff;
  border: 0.2rem solid var(--color-high-text);
  box-sizing: border-box;
  
  &.check{
    border: none;
    background: url("../../assets/img/check.png");
    background-size: 100% 100%;
  }
}

</style>
