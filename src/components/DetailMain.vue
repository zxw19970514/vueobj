<template>
  <div class="goods-detail-wrap">
      <div class="goods-detail-content">
          <div class="goods-detail-section">
              <div class="slick-carousel-container" style="height:320px;">
                  <van-swipe :autoplay="3000" indicator-color="white" style="height:100%">
                        <van-swipe-item><img :src="detailData.img" style="width:100%"></van-swipe-item>
                        <van-swipe-item><img :src="detailData.img" style="width:100%"></van-swipe-item>
                        <van-swipe-item><img :src="detailData.img" style="width:100%"></van-swipe-item>
                    </van-swipe>
              </div>
              <div class="goods-header">
                  <div class="goods-current-price goods-price">
                      <span class="amount">￥{{detailData.price}}</span>
                  </div>
                  <div class="goods-title" style="color:#000000;font-size:14px ;font-weight:normal ;font-style:normal ;font-family:默认 ;">
                        {{detailData.name}}
                  </div>
                  <div class="goodsbr"></div>
                  <div class="goods-models" style="display: block;">
                      <dl>
                          <dt style="color:#000000">
                              活动：
                              <span class="word-orange" style="color:#cc0000">[最新优惠券]</span>
                          </dt>
                          <dd style="color:#000000">
                              <a href="#">立即领取 > </a>
                          </dd>
                      </dl>
                  </div>
                  <div class="goods-models select-model" style="display: block;border:0;" @click="haha">
                      <dl>
                          <dt style="color:#000000">选择商品规格</dt>
                          <dd style="color:#000000"> > </dd>
                      </dl>
                  </div>
              </div>
          </div>
          <div class="record">
              <dl>
                  <dt style="color:#000000">交易记录</dt>
                  <dd style="color:#c4c4c4">
                      <span style="color:#cc0000">购买0+&nbsp;&nbsp;</span>
                      浏览0+
                  </dd>
              </dl>
          </div>
          <div style="padding: 8px; text-align: center; color: #b2b2b2; font-size: 12px;">
              <div class="line"></div>
              <span style="display: inline-block; vertical-align: middle; margin-right: 3px;color:#c4c4c4">继续拖动，查看商品信息</span>
              <div class="line"></div>
          </div>
          <div class="goods-detail-section">
              <div class="block-item">
                  <div style="border-bottom: 1px solid #f4f4f4;">
                      <span class="show-product-detail active" style="text-align:center;width:48%;display:inline-block;">
                          <span class="item" style=" padding-bottom: 8px;display:inline-block;">详情</span>
                      </span>
                      <span class="show-product-comment" style="text-align:center;width:48%;display:inline-block;">
                           <span class="item" style="padding-bottom: 8px;display:inline-block;">
                              评论(<span class="goods-comment-count">0</span>)
                           </span>
                      </span>
                  </div>
                  <div></div>
                  <div></div>
              </div>
          </div>
      </div>
      <div class="goods-bottom-opt extra-bottom-opt" style="display:block;">
          <div class="goods-bottom-bar">
              <div class="flex-sub-box-2">
                  <button class="btn btn-yellow add-to-shoppingcart" style="background-color:#000000;color:#ffffff" @click='addItem(detailData)'>加入购物车</button>
              </div>
              <router-link to="/shopCart" tag='div' class="flex-sub-box-2">
                  <button class="btn btn-orange buy-goods-directly" style="background-color:#cc0000;color:#ffffff">进入购物车</button>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import Vue from 'vue';
import { Sku } from 'vant';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(Sku);
export default {
    data(){
        return{
        }
        },
    props:['detailData'],
    computed:mapGetters(['buycar']),
    methods:{
        ...mapActions(['addItem']),
        onBuyClicked(data) {
          this.$toast('buy:' + JSON.stringify(data));
        },

        onAddCartClicked(data) {
        this.$toast('add cart:' + JSON.stringify(data));
        }, 
        haha(){
            if(this.showBase==true){
                this.showBase=false
            }else{
                this.showBase=true
            }
        }    
    },
}
</script>

<style scoped>
.goods-bottom-opt .btn {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    box-sizing: border-box;
    line-height: 24px;
    border-radius: 0;
    color: #fff;
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    width: auto;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid #ccc;
    border-radius: 2px;
    color: #666;
    background-color: #f6f6f6;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
}
.flex-sub-box-2 {
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
}
.goods-bottom-opt {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    padding: 0;
    border-top: 1px solid #ccc;
    background-image: linear-gradient(to top, rgba(226, 227, 231, 0.33) 0%,rgba(248, 248, 248, 0.33) 100%);
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    font-size: 0;
}
.goods-detail-wrap .block-item>div {
    color: #000000;
}
.goods-detail-section .active .item {
    color: #cc0000;
    border-bottom: 1px solid #cc0000;
}
.goods-detail-section .item {
    cursor: pointer;
}
.goods-detail-wrap .block-item {
    padding: 10px;
}
.line {
    width: 40px;
    height: 1px;
    background: #ccc;
    display: inline-block;
    vertical-align: middle;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.goods-detail-wrap dl {
    margin: 6px 0px 6px 0;
    color: #666;
    overflow: hidden;
}
.goods-detail-wrap dt {
    display: inline-block;
    float: left;
}
.goods-detail-wrap dd {
    display: inline-block;
    letter-spacing: -0.34px;
    padding-left: 10px;
    float: right;
}
.goods-detail-wrap {
    background-color: #eee;
    font-size: 12px;
}
.goods-detail-content .goods-detail-section {
    background-color: #fff;
}
.goods-detail-wrap .slick-carousel-container {
    width: 100%;
    text-align: center;
    overflow: hidden;
}
.record {
    display: block;
    background: #fff;
    padding: 10px;
    font-size: 12px;
    margin: 8px 0;
}
.goods-detail-wrap .goods-header {
    padding: 1px 10px;
}
.goods-price,.goods-title {
    text-align: center;
}
.goods-price {
    padding: 8px 0 0 0;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-family: 默认;
}
.goods-current-price{
    color: #cc0000;
}
.goods-detail-wrap .goodsbr {
    border-bottom: 1px solid #eee;
    height: 10px;
}
</style>