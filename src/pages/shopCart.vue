<template>
    <div class="app">
        <CartHeader></CartHeader>
        <CartMain></CartMain>
    </div>
</template>

<script>
import CartHeader from '../components/CartHeader'
import CartMain from '../components/CartMain'
import axios from 'axios'
export default {
    components:{
        CartHeader,CartMain
    },
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
    }
}
</script>

<style>

</style>