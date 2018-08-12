// react
import React from 'react'
// styles
import '@/styles/iconfont/iconfont.less'

const contianer = WrappedComponent => class WrapperComponent extends React.Component {

    // constructor(props){
    //     super(props)
    //     console.log(props)
    // }
    render(){
        return (
        <div className="icon-container">
            <WrappedComponent {...this.props}/>
        </div>)
    }
}

// 对传入的图加一层 div 统一图标的样式和风格
export default contianer