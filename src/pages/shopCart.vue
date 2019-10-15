<template>
    <div class="app">
        <CartHeader></CartHeader>
        <CartMain></CartMain>
        <Footer></Footer>
    </div>
</template>

<script>
import CartHeader from '../components/CartHeader'
import CartMain from '../components/CartMain'
import Footer from '../components/Footer'
import axios from 'axios'
export default {
    components:{
        CartHeader,CartMain,Footer
    },
    beforeRouteEnter(to,from,next){
        axios({
            url:'http://localhost:3000/api/user',
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