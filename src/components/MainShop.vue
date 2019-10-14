<template>
  <div class="element" style="padding-top:42px;">
      <div class="element" style="width:20.98%;display:inline-block;float:left;position:relative;">
          <ul class="shopul">
              <li class="item selected" @click='all'><span>全部</span></li>
              <li class="item" ><span>戒指</span></li>
              <li class="item" ><span>手链</span></li>
              <li class="item" @click='ershi'><span>耳饰</span></li>
              <li class="item" @click="xianglian"><span>项链</span></li>
          </ul>
      </div>
      <div class="element" style="width:79.00%;display:inline-block;float:left;position:relative;">
          <ul>
              <li  v-for="item of listData" :key="item._id" style="margin-bottom: 0px; background-color: #ffffff; height: 80px;">
                  <router-link  :to="'/detail/'+item._id+'?dataName='+dataName">
                      <img :src="item.img" alt="" style="width: 60px; height: 60px;margin-left:auto;" class="list-img">
                      <div class="title-container" style=" width:230px;">
                          <p class="shopd">{{item.name}}</p>
                          <p class="price" style="padding-left:10px;width:230px;;overflow: hidden;color:#cc0000;margin-top:5px;margin-bottom:10px;">￥{{item.price}}</p>
                      </div>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

 <script>
 import axios from 'axios'
 export default {
     props:['listData','dataName'],
     methods:{
        xianglian(){
            axios({
            url:'http://localhost:3000/api/column',
            params:{type:'项链'},
            }).then(
            res=>{this.listData=res.data.data;}
            )
            // event.target.className=event.target.className+'selected'
            for(var i=0;i<event.target.parentNode.children.length;i++){
                event.target.parentNode.children[i].classList.remove('selected')
            }
            event.target.classList.add('selected')
        },
        ershi(){
            axios({
            url:'http://localhost:3000/api/column',
            params:{type:'耳饰'},
            }).then(
            res=>{this.listData=res.data.data;console.log(this.msg)}
            )
            for(var i=0;i<event.target.parentNode.children.length;i++){
                event.target.parentNode.children[i].classList.remove('selected')
            }
            event.target.classList.add('selected')
        },
        all(){
            axios({
                url:'http://localhost:3000/api/column',
            }).then(
                res=>{this.listData=res.data.data;}
            )
            for(var i=0;i<event.target.parentNode.children.length;i++){
                    event.target.parentNode.children[i].classList.remove('selected')
                }
            event.target.classList.add('selected')
        }
        // jizhi(){
        //     axios({
        //     url:'http://localhost:3000/api/column',
        //     params:{type:'戒指'},
        //     }).then(
        //     res=>{this.msg=res.data.data;console.log(this.msg)}
        //     )
        // },
        // shoulian(){
        //     axios({
        //     url:'http://localhost:3000/api/column',
        //     params:{type:'手链'},
        //     }).then(
        //     res=>{this.msg=res.data.data;console.log(this.msg)}
        //     )
        // }
    }
 }
// export default {
//     data(){
//         return{
//             msg:[]
//         }
//     },
//     mounted(){
//         axios({
//             url:'http://localhost:3000/api/column',
//         }).then(
//             res=>{this.msg=res.data.data;}
//         )
//     },
// }
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