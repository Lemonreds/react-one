// react
import React from 'react'
// icontainer
import iconContainer from './base'

function Like(props){
    return (<div className="common-center">
        <i className="iconfont icon-like"></i>
        <span className="icon-label">{ props.label }</span>
    </div>)
}

// 喜欢的人数图标
export default iconContainer(Like)