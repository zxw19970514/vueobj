<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide><img src="/images/banner1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/images/banner2.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'HomeSwiper',
         data() {
            return {
                swiperOption: {
                    pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "bullets"
                    },
                    //循环
                    loop:true,
                    //每张播放时长3秒，自动播放
                    autoplay: {
                    delay: 1500,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                    },
                    speed: 1000,
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
    }
</script>

<style scoped>
    .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
    .banner{width:6.4rem;position: relative;}
    img{width:100%;}
</style>