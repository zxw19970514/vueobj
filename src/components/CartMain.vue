<template>
  <div class="cartMain element" style="margin:0 auto;">
      <div v-if='shopList.length==0' class="cart-empty">
          <img src="/images/shoppingcart.png" alt="" class="cartImg">
          <div class="go-to-shop">继续购物</div>
      </div>
      <div v-else class="cart element">
          <div class="shoppingCart-top-nav" style="display: block;">
              <span class="top-nav-left"></span>
              <span class="top-nav-right">管理</span>
          </div>
          <div class="shoppingCart-edit-bar">
              <span class="shoppingCart-select-all check-box shoppingCart-check-box checked" style="display: inline-block;">
                  <img src="/images/check.png" alt="">
              </span>
               全选            
              <span class="pull-right">
                  <span class="shoppingCart-edit-complete btn">完成</span>
                  <span class="shoppingCart-delete-goods btn">删除</span>
              </span>
              <span style="clear:both"></span>
          </div>
          <div class="shoppingCart-list-wrap">
              <ul class="shoppingCart-goods-list">
                  <li>
                      <div class="shoppingCart-goods-content">
                          <div class="shoppingCart-check-box check-box pull-left checked">
                              <img src="/images/check.png" alt="">
                          </div>
                          <div style="display:table-cell;vertical-align: top;width:60px;">
                              <img src="/images/erzhui1.jpg" alt="" class="shoppingCart-goods-cover">
                          </div>
                          <div class="display:table-cell;padding-left:10px;padding-right:10px;vertical-align:top;min-width:200px">
                              <div class="shoppingCart-goods-title">
                                  <a href="">Leysen小王子的星空 金18k钻石吊坠女 钻石项链女 18K玫瑰金 吊坠</a>
                                  <dl class="variation">
                                      <dt class="variation-">分数:</dt>
                                      <dd class="variation-">吊坠</dd>
                                  </dl>
                              </div>
                              <div>
                                  <div class="shoppingCart-goods-price-wrap">
                                      <span class="amount">¥2998</span>
                                  </div>
                                  <div class="shoppingCart-goods-right">
                                      <div class="quantity">
                                            <button class="minus " type="button"></button>
                                            <input type="text" class="txt" value="2">
                                            <button class="plus" type="button"></button>
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

<script>
export default {
    data(){
        return{
            shopList:['11']
        }
    }
}
</script>

<style scoped>
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
    display: none;
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