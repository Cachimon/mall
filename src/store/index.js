import Vue from 'vue'
import Vuex from 'vuex'
import {getGoods} from 'network/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsinfo: '',
    cartList: [],
    itemId: 0,
    cartSelectAll: false,
    selectedCartList: []
  },
  mutations: {
    getgoods(state){},
    addCart(state, item){
      let ifExist = state.cartList.some((cart) => {
        return cart.id === item.id
      })
      let i = item.amount
      if(ifExist){
        Vue.set(item, 'amount', i+1)
      }else{
        state.cartList.push(item)
      }
      
    },
    updateChose(state, item){
      let currentItem = state.cartList.filter((cart) => {
        return cart.id === item.id
      })
      let itemObj = currentItem[0]
      let chose = !itemObj.chose
      Vue.set(itemObj, "chose", chose)
      if(chose){
        state.selectedCartList.push(item)
      }else{
        let removeIndex = 0
        state.selectedCartList.forEach((cart, index) => {
          removeIndex = index
        })
        state.selectedCartList.splice(removeIndex-1,1)
      }
      state.cartSelectAll = state.cartList.every(cart => {
        return cart.chose === true
      })
    },
    selectAll(state, flag){
      state.cartSelectAll = flag
      state.cartList.forEach(cart => {
        Vue.set(cart, "chose", flag)
      })
    }
  },
  actions: {
    action(context, type){
      context.commit("getgoods")
      return getGoods(type)
    }
  },
  modules: {
  }
})
