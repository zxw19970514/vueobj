<template>
  <div class="shop">
      <ShopHeader></ShopHeader>
      <MainShop :list-data="listData" :data-name="'column'"></MainShop>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import ShopHeader from '../components/ShopHeader'
import MainShop from '../components/MainShop'
import axios from 'axios'
export default {
    data(){ 
        return{
            listData:[]
        }
    },
    components:{
        Footer,ShopHeader,MainShop
    },
    mounted(){
        axios({
            url:'http://localhost:3000/api/column',
        }).then(
            res=>{this.listData=res.data.data;}
        )
    }
}
</script>