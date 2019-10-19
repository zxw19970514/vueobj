<template>
  <div class="userMain">
      <div class="user-center usercenter-mode1 background-ele" style="color: rgb(51, 51, 51); height: auto; opacity: 1; margin-top: 0px; font-size: 16px;">
          <div class="show-div header">
              <span class="empty-span"></span>
              <img src="/images/user.png" alt=""  class="cover-thumb">
              <a href="#" class="nickname">
                    {{user}}
              </a><span @click='loginout' style="color:#00f">注销</span>
              <span class="empty-span"></span>
          </div>
          <van-panel title="我的订单"  status="更多">
            <div>
            <van-grid>
                <van-grid-item icon="cash-back-record" text="付款中" />
                <van-grid-item icon="after-sale" text="已付款" />
                <van-grid-item icon="logistics" text="已发货" />
                <van-grid-item icon="refund-o" text="已退款" />
                <van-grid-item icon="peer-pay" text="已取消" />
            </van-grid>
            </div>
          </van-panel>
          <van-panel title="我的工具"  status="更多">
            <div>
            <van-grid>
                <van-grid-item to="/shopCart" icon="cart-o" text="购物车" />
                <van-grid-item icon="star-o" text="收藏夹" />
            </van-grid>
            </div>
          </van-panel>
          <van-panel title="会员中心"  status="更多">
            <div>
            <van-grid>
                <van-grid-item  icon="coupon-o" text="优惠券"  @click="showList = true;go=true"/>
            </van-grid>
            </div>
          </van-panel>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Panel } from 'vant';
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
Vue.use(Panel);
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
export default {
    data(){
        return{
            user:'',
            active: 0,
        }
    },
    methods:{
        loginout(){
            axios({
                url:'/api/logout',
                method:'delete',
                withCredentials: true,
            }).then(
                res=>{
                    if(res.data.err===0){
                        this.$router.push('/reg');
                    }
                }
            )
        },
    },
    mounted(){
        axios({
            url:'/api/user',
        }).then(
            res=>this.user=res.data.data.username
        )
    }
}
</script>

<style scoped>
.tba{
    vertical-align: top;
     text-align: center;
      display: inline-block;
       padding-left:20px;
        line-height: 54px;
         height: 54px;
         width:20%;
         box-sizing: border-box;
         float:left;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.user-center {
    width: 100%!important;
    color: #fff;
    font-size: 16px;
}
.user-center .show-div {
    position: relative;
    width: 100%;
    height: 100px;
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 1;
    background-color: #cc0000;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-family: 默认;
    color: #ffffff;
}
.user-center .show-div .empty-span {
    display: inline-block;
    width: 25px;
    height: 100%;
    vertical-align: middle;
}
.user-center .show-div .cover-thumb {
    width: 30px;
    height: 30px;
    margin-right: 25px;
    border-radius: 50%;
    vertical-align: middle;
}
.nickname {
    vertical-align: middle;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 200px;
    color:#fff;
}
</style>