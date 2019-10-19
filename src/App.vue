<template>
  <div id="app" class="box">
    <van-loading  v-show="$store.state.bload" type="spinner" color="#f00" style="position:absolute;top:50%;left:50%;z-index:10"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { Loading } from 'vant';
Vue.use(Loading);
export default {
  name: 'app',
}
</script>

<style>
</style>
