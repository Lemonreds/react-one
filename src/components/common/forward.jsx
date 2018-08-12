// react
import React from 'react'
import PropTypes from 'prop-types'
// util
import { getCategory,isReadingType } from '@/one/types'
// components
import { Link } from 'react-router-dom'
import Like from '@/components/icons/like'
// styles
import '@/styles/common/forward.less'

class Forward extends React.Component{

    // props类型检查
    static propTypes = {
        category: PropTypes.string.isRequired,
        item_id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img_url: PropTypes.string.isRequired,
        like_count: PropTypes.number.isRequired,
        author: PropTypes.object.isRequired    
    }

    constructor(props){
        super(props)
        this.init()
    }
    /**
     * 初始化路由跳转信息,点击文章背景图跳转到指定链接
     */
    init(){
        const type = getCategory(this.props.category).type,
              prefix = isReadingType(type) ? 'reading/' : '',
              id = this.props.item_id

        this.route = {
            pathname:`${prefix}${type}/${id}`,
            state:{
                type,
                id
            }
        }
    }
    render(){
        return(
            <div className="forward">
                <header className="forward-header">
                    <img className="icon" alt="one is all" src={this.props.author.web_url} />
                    <div className="author">
                        <span className="title"> { this.props.title } </span>
                        <p className="name"> { this.props.author.user_name}</p> 
                    </div>
                </header>

                <Link to={this.route}>
                    <img  
                    className="forward-background" 
                    alt="one is all"
                    src={this.props.img_url} />
                </Link>

                <footer className="forward-footer">
                    <Like label={this.props.like_count}/>
                </footer>
            </div>
        )
    }
}

// 文章预览展示组件
export default Forward