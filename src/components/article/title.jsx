// react
import React from 'react'
import PropTypes from 'prop-types'
// styles
import '@/styles/article/title.less'

class Title extends React.Component {
    // props 类型检查
    static propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }
    render() {
        return (
        <div className="article-title">
            <h2 className="title-main">{ this.props.title } </h2>
            <h4 className="title-sub">{ this.props.author }</h4>
        </div>)
    }
}

// 标题组件
export default Title