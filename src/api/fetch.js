// https://github.com/axios/axios
import axios from 'axios'

/**
 * axios 默认配置
 */
const instance = axios.create({
    baseURL: 'http://v3.wufazhuce.com:8000/api/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
        if (data) console.log(data)
    }],
    data: null
})
/**
 * api请求方法
 * @param {Object | string} options 
 */
export default function (options) {

    let config
    if (typeof options === 'string') {
        config = {
            url: options,
            methods: 'get'
        }
    } else {
        config = {
            url: options.url,
            method: options.method ? options.method : 'get',
            params: options.params ? options.params : null
        }
    }

    return new Promise((resolve, reject) => {
        instance.request(config).then(res => {
            resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
        }).catch(err => {
            if (err.response) {
                reject(err.response.data)
            } else {
                reject(err)
            }
        })
    })
}