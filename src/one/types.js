/**
 * one 的图文 主要类型
 * key 为 category id
 * value 是 具体类型
 */
export const READING_TYPE = {
    '-1': {
        type: 'UNKONWN',
        des: '未知'
    },
    '0': {
        type: 'banner',
        des: '封面图'
    },
    '1': {
        type: 'essay',
        des: '短文'
    },
    '2': {
        type: 'serial',
        des: '连载'
    },
    '3': {
        type: 'question',
        des: '问答'
    },
    '4': {
        type: 'music',
        des: '音乐'
    },
    '5': {
        type: 'movie',
        des: '影视'
    }
}
/**
 * @method 根据categoryId获取图文的类型
 * @param {string}
 * @return {Object}
 */
export function getCategory(catagoryId) {
    return READING_TYPE[catagoryId] ? READING_TYPE[catagoryId] : READING_TYPE['-1']
}

/**
 * @method 判断是否是阅读的类型
 * @param {string} type 
 */
export function isReadingType(type) {
    return type === 'essay' || type === 'question' || type === 'serial'
}