// react
import React from 'react'
// styles
import '@/styles/article/content.less'

function Content(props){
    return (
        <main className="article-content" 
            dangerouslySetInnerHTML= {{ __html: props.content || ''}}>
        </main>)
}

// 文章内容组件
export default Content