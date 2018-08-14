/* @see https://github.com/gongph/one-api
 */

 export default {
    // 首页接口
    index: {
        getIdList: '/onelist/idlist', // 获取前十天的图文id数组集合
        getOneList: '/onelist/:id/0', // 根据图文id获取某一天的图文列表 
    },
    // 一个阅读接口
    reading:{
        getReading: '/channel/reading/more/0' ,// 获取阅读频道最新的10条图文
        getMoreReading: '/channel/reading/more/:id', // 获取更多的阅读 id是最后一篇
        /**
         * example:
         *         essay/{id}
         *         serialcontent/{id}
         *         question/{id}
         */
        getDetails: '/:type/:id'  // 根据id和类型获取内容详情
        
    },
    // 一个电影接口
    movie:{
        getMovieStory: '/movie/:id/story/1/0' // 根据id获取影视详情信息
    },
    // 一个音乐接口
    music:{
        getMusicList: '/channel/music/more/0', // 获取音乐频道最新的10条图文
        getMusic: '/music/detail/:id' // 根据id获取音乐详情
    },
    // 一个评论接口
    comments:{
        getComments: '/comment/praiseandtime/:type/:id/0', // 获取类型为type 的 id 28条评论信息
        /**
         * 获取剩余评论 每次获取20条
         * 
         * example:
         *       id: 图文id
         *       type: 图文类型
         *       lastcommentid: 本页最后一个评论id
         */
        getMoreComments: '/comment/praiseandtime/:type/:id/:lastcommentid'        
    }
}