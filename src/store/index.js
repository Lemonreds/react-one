import { createStore , combineReducers , applyMiddleware} from 'redux'
import *　as index from './index/reducer'
import *  as sidebar from './sidebar/reducer'
// redux异步操作中间件 
// @see https://github.com/reduxjs/redux-thunk
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers( {...index,...sidebar}),
    applyMiddleware(thunk)
)

export default store