import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

function IsPC() {
  let userAgentInfo = navigator.userAgent;
  let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone",  "iPod");//"iPad",
  let flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
if(IsPC()){
  window.location = "./tips.html"
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
