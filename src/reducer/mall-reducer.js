//商城Reducer---指定修改规则

import{ADD_NAVLIST} from '../actions/mallAction'

//设置state的默认值
let defaultState = {
    navlist:[],
    step:0
}

let reducer = function(state=defaultState,action){
    let {type,payload} = action;
    switch(type){
        case ADD_NAVLIST:
            return {
                ...state,
                navlist:[...state.navlist,payload]
            }
        default:
            return state;
    }
}

export default reducer;