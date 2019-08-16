import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//require("style-loader!element-ui/lib/theme-chalk/index.css");

import Elemodal from './components/Elemodal.vue'

Vue.use(ElementUI);
Vue.use({
  install: (Vue) => {
    Vue.component('Modal',Elemodal)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
