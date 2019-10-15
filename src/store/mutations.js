import * as types from'./types';
export default {
    [types.ADD_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.REMOVE_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.CHANGE_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.CLEAR_BUYCAR]:(state,payload)=>{
        state.buycar=payload;
    }
};