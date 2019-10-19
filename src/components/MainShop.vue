<template>
  <div class="element" style="padding-top:42px;">
      <div class="element" style="width:20.98%;display:inline-block;float:left;position:relative;">
          <ul class="shopul">
              <li class="item selected" @click='all'><span>全部</span></li>
              <li class="item" @click="jiezhi"><span>戒指</span></li>
              <li class="item" @click="shoulian"><span>手链</span></li>
              <li class="item" @click='ershi'><span>耳饰</span></li>
              <li class="item" @click="xianglian"><span>项链</span></li>
          </ul>
      </div>
      <div class="element" style="width:79.00%;display:inline-block;float:left;position:relative;">
          <ul>
              <li  v-for="item of list" :key="item._id" style="margin-bottom: 0px; background-color: #ffffff; height: 80px;">
                  <router-link  :to="'/detail/'+item._id+'?dataName='+dataName">
                      <img  alt="" v-lazy="item.img" style="width: 60px; height: 60px;margin-left:auto;" class="list-img">
                      <div class="title-container" style=" width:230px;">
                          <p class="shopd">{{item.name}}</p>
                          <p class="price" style="padding-left:10px;width:230px;;overflow: hidden;color:#cc0000;margin-top:5px;margin-bottom:10px;">￥{{item.price}}</p>
                      </div>
                  </router-link>
              </li>
          </ul>
      </div>
      <div class="goTop" style="position:fixed;right:0;bottom:50px;width:30px;background-color:#fff;border-radius:50%   ">
          <van-icon name="arrow-up" size="30px" @click="backTop"/>
      </div>
  </div>
</template>

 <script>
 import Vue from 'vue';
import { Icon } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Icon);
 export default {
     data(){
         return{
             list:null
         }
     },
     props:['listData','dataName'],
     methods:{
        xianglian(){
            axios({
            url:'/api/column',
            params:{type:'项链'},
            }).then(
            res=>{this.list=res.data.data;}
            )
            // event.target.className=event.target.className+'selected'
            if(event.target.tagName == "LI"){
                for(var i=0;i<event.target.parentNode.children.length;i++){
                    event.target.parentNode.children[i].classList.remove('selected')
                }
                event.target.classList.add('selected')
            }else{
                for(var i=0;i<event.target.parentNode.parentNode.children.length;i++){
                    event.target.parentNode.parentNode.children[i].classList.remove('selected')
                }
                event.target.parentNode.classList.add('selected')
            }
        },
        ershi(){
            axios({
            url:'/api/column',
            params:{type:'耳饰'},
            }).then(
            res=>{this.list=res.data.data;}
            )
            if(event.target.tagName == "LI"){
                for(var i=0;i<event.target.parentNode.children.length;i++){
                    event.target.parentNode.children[i].classList.remove('selected')
                }
                event.target.classList.add('selected')
            }else{
                for(var i=0;i<event.target.parentNode.parentNode.children.length;i++){
                    event.target.parentNode.parentNode.children[i].classList.remove('selected')
                }
                event.target.parentNode.classList.add('selected')
            }
        },
        jiezhi(){
            axios({
            url:'/api/column',
            params:{type:'戒指'},
            }).then(
            res=>{this.list=res.data.data;}
            )
            if(event.target.tagName == "LI"){
                for(var i=0;i<event.target.parentNode.children.length;i++){
                    event.target.parentNode.children[i].classList.remove('selected')
                }
                event.target.classList.add('selected')
            }else{
                for(var i=0;i<event.target.parentNode.parentNode.children.length;i++){
                    event.target.parentNode.parentNode.children[i].classList.remove('selected')
                }
                event.target.parentNode.classList.add('selected')
            }
        },
        shoulian(){
            axios({
            url:'/api/column',
            params:{type:'手链'},
            }).then(
            res=>{this.list=res.data.data;}
            )
            if(event.target.tagName == "LI"){
                for(var i=0;i<event.target.parentNode.children.length;i++){
                    event.target.parentNode.children[i].classList.remove('selected')
                }
                event.target.classList.add('selected')
            }else{
                for(var i=0;i<event.target.parentNode.parentNode.children.length;i++){
                    event.target.parentNode.parentNode.children[i].classList.remove('selected')
                }
                event.target.parentNode.classList.add('selected')
            }
        },
        all(){
            axios({
                url:'/api/column',
            }).then(
                res=>{this.list=res.data.data;}
            )
            if(event.target.tagName == "LI"){
                for(var i=0;i<event.target.parentNode.children.length;i++){
                    event.target.parentNode.children[i].classList.remove('selected')
                }
                event.target.classList.add('selected')
            }else{
                for(var i=0;i<event.target.parentNode.parentNode.children.length;i++){
                    event.target.parentNode.parentNode.children[i].classList.remove('selected')
                }
                event.target.parentNode.classList.add('selected')
            }
        },
        backTop () {
            const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                clearInterval(timer)
                }
            }, 16)
        },
 
        scrollToTop () {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 60) {
            that.btnFlag = true
            } else {
            that.btnFlag = false
            }
        },
    },
    mounted(){
        axios({
                url:'/api/column',
            }).then(
                res=>{this.list=res.data.data;}
            ),
        window.addEventListener('scroll', this.scrollToTop)
    },   
    destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
    },
 }
 </script>

<style scoped>
.goods-list-item{
    position: relative;
    height: 60px;
    padding-left: 10px;
    margin-bottom: 1px;
    text-decoration: inherit;
    vertical-align: top;
}
.title-container {
    display: inline-block;
    width: calc(100% - 70px);
    text-decoration: inherit;
    vertical-align: top;
}
.shopd {
    text-decoration: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 12px);
    padding-left:10px;
}
.list-img {
    display: inline-block;
    width: 60px;
    height: 60px;
    vertical-align: middle;
}
.element {
    display: block;
    width: auto;
    max-width: 100%;
    border-color: #222222;
    border-width: 0;
}
.shopul {
    width: 100%;
    white-space: nowrap;
    text-decoration: inherit;
    float: left;
}
li.item {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e5e5e5;
    display: block;
    text-align: left;
    padding-left: 5px;
    position: relative;
    min-width: 71px;
    vertical-align: top;
    cursor: pointer;
}
.selected{
    border-left: 2px solid #cc0000;
    color: #cc0000;
}
</style>