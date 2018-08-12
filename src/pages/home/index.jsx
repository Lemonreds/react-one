// react
import React from 'react'
// redux 
import { connect } from 'react-redux'
import { getIdList } from '@/store/index/action'
// api
import { fetch,url } from '@/api/'
// utils
import { isEmptyObject } from '@/utils/common'
// components
import { Link } from 'react-router-dom'
import Banner from '@/components/common/banner'
import Forward from '@/components/common/forward'
// styles
import '@/styles/pages/home.less'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // 首页图片
            banner: {},
            // 首页文章
            posts: []
        }
    }

    // 初始化数据
    componentWillMount(){
        // 获取10天内的图文详情 触发redux
        this.props.getIdList()
    }
    // props 更新数据时候触发事件 如 redux 更新
    componentWillReceiveProps(nextProps){
        if(nextProps.current === '') return;
        this.fetchOneList(nextProps.current)
    }


    /**
     * 获取显示的图文详情
     * @param {string} id 
     */
    fetchOneList(id){

        fetch({
            url:url.index.getOneList.replace(':id',id)
        }).then( res =>{
            this.setState({
                banner: res.data.content_list[0],
                posts: res.data.content_list.slice(1)
            })            
        })
    }

    render() {
        return (
            <div className="page-home">
                {
                    !isEmptyObject(this.state.banner) &&
                                       <Link to={{  
                                                 pathname: `/graphic/${this.state.banner.id}`,
                                                 state: {banner: this.state.banner}}}> 
                                            <Banner banner={ this.state.banner } />
                                        </Link>
                }
                {
                    this.state.posts.map( (item,idx) =>( 
                    <Forward key={idx} {...item} /> 
                    ))
                }
            </div>
        )
    }
}

// 主页
// redux 连接组件 HOC
export default connect( state => ({
    current: state.index.current,
    idList: state.index.idList
}),{
    getIdList
})(Home)