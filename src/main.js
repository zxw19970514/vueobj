import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/js/font'
import './assets/css/base.css'
import router from './plugins/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
