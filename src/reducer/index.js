//合并reducer
import {combineReducers} from 'redux';

//引入reducer
import mallReducer from './mall-reducer';

const rootReducer = combineReducers({
    mall:mallReducer,
})

export default rootReducer;