import * as types from'./types';
export default {
    [types.VIEW_LOADING]:(state,payload)=>state.bload=payload,


    [types.ADD_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.REMOVE_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.CHANGE_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.USER_LIST]:(state,payload)=>{
        state.buycar=payload;
    }
};