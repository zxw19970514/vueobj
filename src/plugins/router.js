import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Column from '../pages/Column.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
import shopCart from '../pages/shopCart.vue'

let routes=[
  {path:'/home',component:Home},
  {path:'/Shop',component:Shop},
  {path:'/column',component:Column},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/shopCart',component:shopCart},
  {path:'/Reg',component:Reg},
  {path:'/Detail/:id',component:Detail,name:'detail'},
  {path:'/',redirect:'/home'},
  {path:'*',component:Error},

];

export default new VueRouter({routes})