<template>
  <div class="userMain">
      <div class="user-center usercenter-mode1 background-ele" style="color: rgb(51, 51, 51); height: auto; opacity: 1; margin-top: 0px; font-size: 16px;">
          <div class="show-div header">
              <span class="empty-span"></span>
              <img src="/images/user.png" alt=""  class="cover-thumb">
              <a href="#" class="nickname">
                    {{this.$root.$data.username}}
              </a><span @click='loginout' style="color:#00f">注销</span>
              <span class="empty-span"></span>
          </div>
          <div class="horizontal-router-container1">
              <div style="opacity: 1; font-size: 12px; margin-top: 5px; color: #000000; background-color: #ffffff;">
                    <p style="height: 45px; line-height: 45px; border-bottom: 1px solid transparent; text-indent: 20px;font-size:12px ;font-weight:normal ;font-style:normal ;font-family:默认 ; ">
                        我的订单                    
                    </p>
                    <ul style="overflow:hidden">
                        <li class="tba">付款中</li>
                        <li class="tba">已付款</li>
                        <li class="tba">已发货</li>
                        <li class="tba">已退款</li>
                        <li class="tba">已取消</li>
                    </ul>
              </div>
            <div style="opacity: 1; font-size: 12px; margin-top: 5px; color: #000000; background-color: #ffffff;">
                <p style="height: 45px; line-height: 45px; border-bottom: 1px solid transparent; text-indent: 20px;font-size:12px ;font-weight:normal ;font-style:normal ;font-family:默认 ; ">
                    我的工具                   
                </p>
                <ul style="overflow:hidden">
                    <li class="tba">购物车</li>
                    <li class="tba">收藏夹</li>
                </ul>
            </div>
            <div style="opacity: 1; font-size: 12px; margin-top: 5px; color: #000000; background-color: #ffffff;">
                <p style="height: 45px; line-height: 45px; border-bottom: 1px solid transparent; text-indent: 20px;font-size:12px ;font-weight:normal ;font-style:normal ;font-family:默认 ; ">
                    会员中心                    
                </p>
                <ul style="overflow:hidden">
                    <li class="tba">优惠券</li>    
                </ul>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        loginout(){
            axios({
                url:'http://localhost:3000/api/logout',
                method:'delete',
                withCredentials: true,
            }).then(
                res=>{
                    if(res.data.err===0){
                        this.$router.push('/reg');
                    }
                }
            )
        }
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