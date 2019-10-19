import * as types from './types';
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import axios from "axios";
export default {
    [types.VIEW_LOADING]:({state,commit},payload)=>{
        //校验payload的类型
        commit(types.VIEW_LOADING,payload)
      },
    addItem:({commit,state},payload)=>{
        let arr=[...state.buycar];
        let find=false;
        arr.forEach((item,index)=>{
            if(item._id==payload._id){
                item.number++;
                find=true;
            }
        });
        if(!find){
            payload.number=1;
            arr.push(payload);
        }
        axios({
            url:'/api/cart',
            withCredentials: true,
            method:'POST',
            data:{
                buycar:arr
            }
        })
        Toast.success('加入成功');
        commit(types.ADD_ITEM,arr)
    },
    changeItem:({commit,state},payload)=>{
        let arr=[...state.buycar];
        state.buycar.forEach((item,index)=>{
            if(item._id==payload._id){
                item.number+=payload.num;
            }
        });
        axios({
            url:'/api/cart',
            withCredentials: true,
            method:'POST',
            data:{
                buycar:arr
            }
        })
        commit(types.CHANGE_ITEM,[...state.buycar])
    },
    removeItem:({commit,state},payload)=>{
        state.buycar.forEach((item,index)=>{
            if(item._id==payload._id){
                state.buycar.splice(index,1);
            }
        });
        let arr=[...state.buycar];
        axios({
            url:'/api/cart',
            withCredentials: true,
            method:'POST',
            data:{
                buycar:arr
            }
        })
        commit(types.REMOVE_ITEM,[...state.buycar])
    },
    userList:({commit,state})=>{
        axios({
            url:'/api/getcart',
            withCredentials: true,
        }).then(
            res=>commit(types.USER_LIST,res.data.data.buycar)
        )
    }
};