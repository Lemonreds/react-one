import * as INDEX from './actionTypes'
// https://github.com/facebook/immutable-js

const defaultState = {
    // 当前的图文id
    current: '',
    // 10天的图文id数组
    idList: []
}

export const index = (state = defaultState, action) => {

    switch (action.type) {
        case INDEX.GET_ID_LIST:
            return {
                ...state,
                ...{
                    idList: action.idList
                }
            }
        case INDEX.SET_CURRENT_ID:
            return {
                ...state,
                ...{
                    current: action.current
                }
            }
        default:
            return state
    }
}