import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//Add a new boolean data property `onSale` and create a computed property that takes `brand`, `product` and `onSale` and prints out a string whenever `onSale` is true.

