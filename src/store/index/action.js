import * as INDEX from './actionTypes'
import { fetch,url } from '@/api/'
/**
 * 异步操作返回一个处理函数 
 * @param {function} 操作成功后的执行函数
 * @method  获取前十天的图文id数组集合  
 */
export const getIdList = ()=> {
    return async dispatch => {
        try {
            const result = await fetch({
                url: url.index.getIdList
            })
            if (result.res !== 0) {
                throw new Error(`接口 ${url.indx.getIdList} 返回码错误`)
            }
            // 触发action 执行相关 reducer
            // 更新所有图文id数据
            dispatch({
                type: INDEX.GET_ID_LIST,
                idList: result.data
            })
            // 更新为今天的图文id
            dispatch({
                type: INDEX.SET_CURRENT_ID,
                current: result.data[0]
            })

        } catch (err) {
            console.error(err)
        }
    }
}