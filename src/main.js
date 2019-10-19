import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.server=require('./config/serve')
//导入字体文件
import './assets/js/font'
//导入css动画样式
import './assets/css/animate.css'
//导入基础样式，初始化默认样式
import './assets/css/base.css'
//导入配置好的路由
import router from './plugins/router'
//导入状态管理
import store from './plugins/store'
//全局导入axios
import './plugins/axios';

new Vue({
  data(){
    return{
      load:true
    }
  },
  render: h => h(App),
  router,store
}).$mount('#app')
