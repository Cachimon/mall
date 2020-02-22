import Vue from 'vue'
import Vuex from 'vuex'
import {getGoods} from 'network/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList: {
      pop: [],
      news: [],
      sell: [],
      type: ["pop", "news", "sell"]
    },
    itemId: 0,
    goodsinfo: '',
    cartList: [],
    itemId: 0,
    cartSelectAll: false,
    selectedCartList: []
  },
  mutations: {
    getgoods(state, payload){
      
      /*console.log(state.goodsList[type])
        let datas = payload.res.data
        for(let data of datas){
          data.id = state.itemId
          data.amount = 1
          data.chose = false
          state.itemId++
        }
        //this.goodsList[type] = datas;*/
        Vue.set(state.goodsList, payload.type, payload.datas)
    },
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
      return getGoods(type).then(res => {
        let datas = res.data
        for(let data of datas){
          data.id = this.state.itemId
          data.amount = 1
          data.chose = false
          this.state.itemId++
        }
        context.commit("getgoods", {datas, type})
        return new Promise(resolve => {
          resolve(datas)
        })
      })
      
    }
  },
  modules: {
  }
})
