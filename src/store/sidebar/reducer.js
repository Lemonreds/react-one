import * as SIDEBAR from './actionTypes'
import { SIDEBAR_STATUS } from '@/one/status'
// https://github.com/facebook/immutable-js

const defaultState = {
    // sidebar的可见性
    status: SIDEBAR_STATUS.INITTIAL
}

export const sidebar = (state = defaultState, action) => {

    switch (action.type) {
        case SIDEBAR.TOGGLE_SIDEBAR_STATUS:
            let status 
            if(state.status === SIDEBAR_STATUS.HIDDEN){
                status = SIDEBAR_STATUS.VISIBLE
            }else if( state.status === SIDEBAR_STATUS.VISIBLE){
                status = SIDEBAR_STATUS.HIDDEN
            }else {
                status = SIDEBAR_STATUS.VISIBLE
            }
            return {
                ...state,
                status
            }
        default:
            return state
    }
}