import * as types from './types';
export default {
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
        commit(types.ADD_ITEM,arr)
    },
    changeItem:({commit,state},payload)=>{
        console.log(payload)
        state.buycar.forEach((item,index)=>{
            if(item._id==payload._id){
                item.number+=payload.num;
            }
        });
        commit(types.CHANGE_ITEM,[...state.buycar])
    },
    removeItem:({commit,state},payload)=>{
        state.buycar.forEach((item,index)=>{
            if(item._id==payload._id){
                state.buycar.splice(index,1);
            }
        });
        commit(types.REMOVE_ITEM,[...state.buycar])
    },
    clearBuycar:({commit,state})=>{
        commit(types.CLEAR_BUYCAR,[]);
    }
};