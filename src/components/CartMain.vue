<template>
  <div class="cartMain element" style="margin:0 auto;">
      <div v-if='shopList.length==0' class="cart-empty">
          <img src="/images/shoppingcart.png" alt="" class="cartImg">
          <div class="go-to-shop">继续购物</div>
      </div>
      <div v-else class="cart element">
          <div class="shoppingCart-top-nav" style="display: block;" v-if="flag1">
              <span class="top-nav-left"></span>
              <span class="top-nav-right" @click='manage'>管理</span>
          </div>
          <div class="shoppingCart-edit-bar" v-if="flag2">
              <span class="shoppingCart-select-all check-box shoppingCart-check-box checked" style="display: inline-block;" @click='cancelAll'>
                  <img src="/images/check.png" alt="">
              </span>
               全选            
              <span class="pull-right">
                  <span class="shoppingCart-edit-complete btn" @click='complete'>完成</span>
                  <span class="shoppingCart-delete-goods btn">删除</span>
              </span>
              <span style="clear:both"></span>
          </div>
          <div class="shoppingCart-list-wrap">
              <ul class="shoppingCart-goods-list">
                  <li v-for="(item,index) in buycar" :key="index">
                      <div class="shoppingCart-goods-content">
                          <div class="shoppingCart-check-box check-box pull-left checked" v-if="flag2" @click="cancel">
                              <img src="/images/check.png" alt="">
                          </div>
                          <div style="display:table-cell;vertical-align: top;width:60px;">
                              <img :src="item.img" alt="" class="shoppingCart-goods-cover">
                          </div>
                          <div class="display:table-cell;padding-left:10px;padding-right:10px;vertical-align:top;min-width:200px">
                              <div class="shoppingCart-goods-title">
                                  <a href="">{{item.name}}</a>
                                  <dl class="variation">
                                      <dt class="variation-">分数:</dt>
                                      <dd class="variation-">吊坠</dd>
                                  </dl>
                              </div>
                              <div>
                                  <div class="shoppingCart-goods-price-wrap">
                                      <span class="amount">¥{{item.price*item.number}}</span>
                                  </div>
                                  <div class="shoppingCart-goods-right">
                                      <div class="quantity">
                                            <button class="minus" :disabled="item.number>1?  null:'disabled'" type="button" @click="changeItem({_id:item._id,num:-1})"></button>
                                            <input type="text" class="txt" :value="item.number" style="width:32px;text-align:center;">
                                            <button class="plus" type="button" @click="changeItem({_id:item._id,num:1})"></button>
                                            <div class="response-area response-area-minus"></div>
                                            <div class="response-area response-area-plus"></div>
                                        </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="shoppingCart-bottom-nav extra-bottom-opt"></div>
      </div>
  </div>
</template>

<script scoped>
import $ from 'jquery';
import {mapGetters,mapActions} from 'vuex';
export default {
    data(){
        return{
            shopList:['11'],
            flag1:true,
            flag2:false,
            ifit:true
        }
    },
    computed:mapGetters(['buycar']),
    // methods:mapActions(['changeItem','removeItem','clearBuycar']),
    methods:{
        ...mapActions(['changeItem','removeItem','clearBuycar']),
        manage(){
            this.flag1=false;
            this.flag2=true
        },
        complete(){
            this.flag1=true;
            this.flag2=false
        },
        cancel(){
            console.log(event.target.tagName)
            if(event.target.tagName=='IMG' && $(event.target.parentNode).hasClass('checked')){
                $(event.target.parentNode).removeClass('checked')
            }else if(event.target.tagName=='DIV' && $(event.target).hasClass('checked')){
                $(event.target).removeClass('checked')
            }else if(event.target.tagName=='IMG' && $(event.target.parentNode).not('.checked')){
                $(event.target.parentNode).addClass('checked')
            }else if(event.target.tagName=='DIV' && $(event.target).not('.checked')){
                $(event.target).addClass('checked')
            }
        },
        cancelAll(){
            if(event.target.tagName=='IMG' && $(event.target.parentNode).hasClass('checked')){
                $(event.target.parentNode).removeClass('checked')
                $('div').removeClass('checked')
            }else if(event.target.tagName=='SPAN' && $(event.target).hasClass('checked')){
                $(event.target).removeClass('checked')
                $('div').removeClass('checked')
            }else if(event.target.tagName=='IMG' && $(event.target.parentNode).not('.checked')){
                $(event.target.parentNode).addClass('checked')
                $('.check-box').addClass('checked')
            }else if(event.target.tagName=='SPAN' && $(event.target).not('.checked')){
                $(event.target).addClass('checked')
                $('.check-box').addClass('checked')
            }
        }
    },
}
</script>

<style scoped>
.quantity .minus:before, .quantity .plus:before {
    position: absolute;
    width: 8px;
    height: 2px;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #6c6c6c;
    bottom: 0;
    content: '';
}
.minus::before,.plus::after,.plus::before {
    position: absolute;
    width: 8px;
    height: 2px;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #878787;
    bottom: 0;
    content: '';
}
.quantity .response-area-plus {
    right: -5px;
}
.quantity .response-area-minus {
    left: -5px;
}
.quantity .plus:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    content: '';
    width: 2px;
    height: 8px;
    background-color: #6c6c6c;
}
.quantity input {
    border: none;
    height: 20px;
    background-color: #f1f1f1;
    padding: 0;
    margin: 0 1px;
    border-radius: 0;
    color: #59607B;
}
.minus,.plus {
    position: relative;
    display: inline-block;
    font-size: 16px;
    outline: 0 !important;
    text-indent: -9999px;
    overflow: hidden;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-weight: normal;
    background-color: #f1f1f1;
    color: #878787;
    border-radius: 2px;
    border: none;
}
.quantity {
    display: inline-block;
    position: relative;
}
.shoppingCart-goods-right {
    float: right;
    text-align: right;
    padding-right: 5px;
}
.shoppingCart-goods-price-wrap {
    float: left;
    color: #cc0000;
    font-size: 12px;
    line-height: 24px;
}
.shoppingCart-goods-list .variation > * {
    display: inline-block;
    margin: 0;
    padding: 0;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.variation {
    font-size: 9px;
    margin: 3px 0;
    color: #c4c4c4;
}
.shoppingCart-goods-title {
    font-size: 12px;
}
.shoppingCart-goods-cover {
    width: 60px;
    height: 60px;
    float: left;
    margin-right: 10px;
}
.shoppingCart-goods-content {
    padding: 10px 10px 10px 0;
    color: #000000;
    display: table;
    width: 100%;
}
.shoppingCart-goods-list > li {
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 10px;
}
.shoppingCart-goods-list > li:first-child {
    border-top: 1px solid #e5e5e5;
}
.shoppingCart-goods-list{
    background:#fff;
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
.shoppingCart-edit-bar .btn {
    cursor: pointer;
    border-radius: 2px;
    background: transparent;
    color: #000000;
    border-color: #000000;
}
.check-box img {
    width: 100%;
}
.element {
    display: block;
    width: auto;
    max-width: 100%;
    border-color: #222222;
    border-width: 0;
}
.cartImg{
    width: 100px;
    height: 100px;
    margin-top: 150px;
}
.go-to-shop{
    width: 120px;
    background-color: #cc0000;
    color: #ffffff;
    line-height: 30px;
    margin: 0 auto;
    border-radius: 3px;
    margin-top: 10px;
    padding-left: 6px;
    padding-right: 6px;
}
.shoppingCart-top-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 42px;
    line-height: 42px;
    padding: 0 10px;
    text-align: center;
    z-index: 9;
    box-shadow: 0 1px 2px #eee;
    background-color: #fff;
}
.shoppingCart-top-nav {
    position: relative;
    box-shadow: none;
    text-align: left;
}
.shoppingCart-edit-bar {
    display: block;
    background: #fff;
    line-height: 31px;
    padding: 5px 10px;
    text-align: start
}
.shoppingCart-list-wrap {
    background-color: #e6e6e6;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
}.shoppingCart-bottom-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 10px;
    line-height: 45px;
    z-index: 9;
    background-color: #fff;
    box-shadow: 0 -1px 2px #eee;
}
.top-nav-right {
    position: absolute;
    top: 0;
    right: 10px;
}
.check-box.checked {
    background-color: #cc0000;
}
.shoppingCart-check-box {
    margin-top: 0px;
}
.check-box {
    display: inline-block;
    width: 16px;
    height: 16px;
    padding: 1px 3px;
    margin-right: 6px;
    box-sizing: border-box;
    border-radius: 50%;
    vertical-align: middle;
    line-height: 13px;
    background-color: #c7c4c4;
}
.pull-right {
    float: right;
}
</style>