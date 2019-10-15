import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/js/font'
import './assets/css/base.css'
import router from './plugins/router'
import store from './plugins/store'

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
