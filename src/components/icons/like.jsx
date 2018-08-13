// react
import React from 'react'

function Like(props){
    return (
    <div className="icon-contianer common-center">
        <i className="iconfont icon-like"></i>
        <span className="icon-label">{ props.label }</span>
    </div>)
}

// 喜欢的人数图标
export default Like