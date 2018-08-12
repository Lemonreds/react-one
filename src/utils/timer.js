/**
 *  时间单位换算
 *  多少秒一个单位
 */
const perSeconds = {
    year: 365 * 86400,
    month: 2592000, // 计30天
    day: 86400,
    hour: 3600,
    min: 60
}
/**
 * @method 转换时间为xx天以前
 * @param date
 * example:
 *       2018-07-25T09:27:45.160Z
 * @return {string} 
 */
export function timeAfter(date) {
    // 2018-07-25 09:27:45.160
    let t = date.replace('T', ' ').substring(0, date.length - 1)
    // 获取秒数
    let seconds = (new Date().getTime() - new Date(t).getTime()) / 1000
    if (seconds > perSeconds.year) {
        return ~~(seconds / perSeconds.year) + '年前'
    }
    if (seconds > perSeconds.month) {
        return ~~(seconds / perSeconds.month) + '月前'
    }
    if (seconds > perSeconds.day) {
        return ~~(seconds / perSeconds.day) + '天前'
    }
    if (seconds > perSeconds.hour) {
        return ~~(seconds / perSeconds.hour) + '小时以前'
    }
    if (seconds > perSeconds.min) {
        return ~~(seconds / perSeconds.min) + '分钟以前'
    }
    return '刚刚'
}

// 月份的英文缩写
const MONTH = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']

/**
 * @method 获取当前的月日年
 * example:{
 *     year : '2018',
 *     month: 'Aug.',
 *     day : '08'
 * }
 * @return {Object}
 */
export function getCurrentDate() {

    const current = new Date()

    return {
        year: current.getFullYear(),
        month: MONTH[current.getMonth()],
        day: current.getDate() < 10 ? '0' + current.getDate() : current.getDate()
    }
}

/**
 * @method 转换时间
 * @param {string} dateStr 
 * example:
 *     2018-08-10 06:00:00
 * return {
 *      year: 2018
 *      ,month: Aug
 *      ,day: 10
 * }
 */
export function parseDate(dateStr) {  
    return{
        year: dateStr.substring(0,4),
        month: MONTH[+(dateStr.substring(5,7)-1)],
        day: dateStr.substring(8,10)
    }
}