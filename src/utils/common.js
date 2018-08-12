/**
 * 判断是否是空对象
 * @param {object} obj 
 * @return {boolean}
 */
function isEmptyObject(obj) {
    for (let prop in obj) {
        return false
    }
    return true
}


export{
    isEmptyObject
}