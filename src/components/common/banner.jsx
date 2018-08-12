/**
 * banner组件
 */
import React from 'react'
import PropTypes from 'prop-types'
// styles
import '@/styles/common/banner.less'
// utils
import { parseDate } from '@/utils/timer'
import BANNER_STYLE from '@/one/banner'

class Banner extends React.Component {
 
    // 默认props
    static defaultProps = {
        style: BANNER_STYLE.DEFAULT
    }
    // props 类型检查
    static propTypes = {
        banner: PropTypes.object.isRequired
    }

    constructor(props){
        super(props)
        this.state = {
            date: {}
        }
    }

    componentDidMount(){
        if(this.props.style === BANNER_STYLE.GRAPIHC){
            const date = this.props.banner.post_date
            this.setState({
                date: parseDate(date)
            })
        }
    }

    render() {
        let el =''
        /**
         * 默认风格 用于首页/图文主页展示
         */
        if(this.props.style === BANNER_STYLE.DEFAULT){
            el = (<div className="banner">
                 {/* 顶部内容 */}
                <header className="bn-header">{ this.props.banner.volume}</header>
                {/* banner图片 */}
                <img  className="bn-image" src={this.props.banner.img_url} alt="one is all"/>     
                {/* 图文介绍  */}
                <p className="bn-tips">
                    { this.props.banner.title + ' | ' + this.props.banner.pic_info } 
                </p>
                {/* 图文的前文 */}
                <p className="bn-forward">
                    { this.props.banner.forward }
                </p>
                {/* 图文的来源 */}
                <p className="bn-words">
                    { this.props.banner.words_info}
                </p>
            </div>)
            /*
            *
            * 图文风格 用于单个图文展示
            * 
            */
        }else if(this.props.style === BANNER_STYLE.GRAPIHC){
            el = (<div className="banner">
                {/* banner图片 */}
                <img  className="bn-image" src={this.props.banner.img_url} alt="one is all"/>     
                <div className="bn-author">
                    <span className="common-float-left">{ this.props.banner.volume}</span>
                    <span className="common-float-right">
                    { this.props.banner.title + ' | ' + this.props.banner.pic_info } 
                    </span>
                </div>  
                {/* 时间 */}
                <p className="bn-day">
                    { this.state.date.day}
                </p>
                <p className="bn-month">
                    { this.state.date.month }  { this.state.date.year}
                </p>
                <div className="common-line"/>
                {/* 图文的前文 */}
                <p className="bn-forward">
                    { this.props.banner.forward }
                </p>
            </div>)
        }
        return el
    }
}

// 图文预览展示组件
export default Banner