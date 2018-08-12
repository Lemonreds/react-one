// react
import React from 'react'
import PropTypes from 'prop-types'
// utils
import { isEmptyObject } from '@/utils/common'
// component 
import Subject from '@/components/common/subject'
// styles
import '@/styles/article/author.less'


class Author extends React.Component {
    // props 类型检查
    static propTypes = {
        author: PropTypes.object.isRequired
    }

    render() {
        return (
        <div className="article-author">
           <Subject subject='作者'/>
            {
                !isEmptyObject(this.props.author) && 
                <div className="author-info">
                    <img alt="one is all" src={ this.props.author.web_url }/>
                    <span className="author-info-meta">
                        <span> {this.props.author.user_name} </span> 
                        <span> {this.props.author.summary} </span>
                    </span>
                </div>
            }
        </div>)
    }
}
// 作者信息组件
export default Author