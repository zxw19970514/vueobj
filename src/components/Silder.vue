<template>
    <div class="banner">
        <ul class="clearfix">

        <router-link to="/detail/1" tag="li">
            <img src="/images/banner1.jpg" alt=""/>
        </router-link>

        <router-link to="/detail/2" tag="li">
            <img src="/images/banner2.jpg" alt=""/>
        </router-link>
        </ul>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Swipe from '../assets/js/swipe.js';

    export default {
        props:['banner'],
        mounted(){
            new Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
            })

        }
        }
</script>

<style>
    .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
    .banner ul li{width:6.4rem;float:left;position: relative;}
    .banner ul li img{width:100%; display:block;}
    .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
    .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
    .banner ol li.active{ background:#fff;}
</style>