<template>
    <div class="footer">
        <router-link to='/Home' tag='div' class="item router">
            <a href="">
                <img src="/images/homeIcon-off.png" alt="" class="img-wrap">
                <!-- <img src="/images/homeIcon-on.png" alt=""> -->
            </a>
            <a href="" class="bottom-text">首页</a>
        </router-link>
        <router-link to='/Shop' tag='div' class="item router">
            <a href="">
                <img src="/images/shopIcon-off.png" alt="" class="img-wrap">
                <!-- <img src="/images/shopIcon-on.png" alt=""> -->
            </a>
            <a href="" class="bottom-text">商店</a>
        </router-link>
        <div class="item router">
            <a href="">
                <img src="/images/cartIcon-off.png" alt="" class="img-wrap">
                <!-- <img src="/images/cartIcon-on.png" alt=""> -->
            </a>
            <a href="" class="bottom-text">购物车</a>
        </div>
        <router-link to='/Reg' tag='div' class="item router">
            <a href="">
                <img src="/images/userIcon-off.png" alt="" class="img-wrap">
                <!-- <img src="/images/userIcon-on.png" alt=""> -->
            </a>
            <a href="" class="bottom-text">我的</a>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>>

<style>
div.footer{background-color: #ffffff;border-color: white;background-repeat: no-repeat;background-size: 100% 100%;left: 0;
width: 100%;bottom: 0;line-height: 1.4;text-align: center;color: #fff;position: fixed;z-index: 20;}
div.footer .item{color: #c4c4c4;width: 24%;position: relative;display: inline-block;vertical-align: middle;
text-align: center;text-decoration: inherit;overflow: hidden;}
.img-wrap::after {content: "";display: inline-block;width: 0;height: 100%;vertical-align: middle;}
.img-wrap{height:24px;width:24px;vertical-align: middle;display: inline-block;}
.item .bottom-text {text-align: center;display: block;width: 100%;line-height: 1.5em;font-size: 12px;text-decoration: inherit;}
</style>