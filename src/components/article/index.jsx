// react
import React from 'react'
import PropTypes from 'prop-types'
// components
import Title from '@/components/article/title'
import Content from '@/components/article/content'
import Author from '@/components/article/author'

class Article extends React.Component {

    static propType = {
        title: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        authorInfo: PropTypes.object.isRequired,
        content: PropTypes.string.isRequired
    }

    render() {
        return (
        <article>
            <div className="article-inner">
                <Title  title={this.props.title} author={this.props.authorName}/>
                <Content content={this.props.content}/>
                <Author author={this.props.authorInfo}/>
            </div>
        </article>)
    }
}


// aricle 主出口 用于展示文章的详情
export default Article