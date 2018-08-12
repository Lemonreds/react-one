// react
import React from 'react'
// styles
import '@/styles/common/subject.less'

function Subject(props){
    return (
        <div className="subject">
            { props.subject }
        </div>
    )
}
// 标题组件
export default Subject