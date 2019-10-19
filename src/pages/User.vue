<template>
  <div class="user">
      <UserHead></UserHead>
      <UserMain></UserMain>
      <Footer></Footer>
  </div>
</template>

<script>
import UserMain from '../components/UserMain'
import UserHead from '../components/UserHead'
import Footer from '../components/Footer'
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            userdata:{}
        }
    },
    components:{
        UserHead,Footer,UserMain
    },
    method:mapActions(['clearBuycar']),
    beforeRouteEnter(to,from,next){
        axios({
            url:'/api/user',
            withCredentials: true,
            method:'get'
        }).then(
            res=>{
                res.data.err===0? next(): next('/reg')
                }
        )
    },
}
</script>

<style>

</style>