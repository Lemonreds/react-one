/**
 * 侧边栏 组件
 */
// react
import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { connect } from 'react-redux'
import { toggleSidebarStatus } from '@/store/sidebar/action'
// util
import { SIDEBAR_STATUS } from '@/one/status'
// components
import Menu from "./menu";
// styles
import '@/styles/sidebar/sidebar.less'


class Sidebar extends React.Component {
    
    constructor(props){
        super(props)
        this.toggleSidebarStatus = this.props.toggleSidebarStatus.bind(this)  
        this.state = {
            asideClass : '',
            layerClass : 'hide'
        }      
    }

    /**
     * 根据sidebar的状态为组件增加css class 动画
     */
    componentWillReceiveProps(nextProps){
        if(nextProps.status === SIDEBAR_STATUS.VISIBLE){
            this.setState({
                asideClass: 'slideIn',
                layerClass: 'show'
            })
        }else if(nextProps.status === SIDEBAR_STATUS.HIDDEN){
            this.setState({
                asideClass: 'slideOut',
                layerClass: 'hide'
            })
        }
        // else nextProps.status === SIDEBAR_STATUS.INITAIL
    }
 
    /**
     *  初始化不更新 
     */
    shouldComponentUpdate(nextState,nextProps){
        return nextProps.status !== SIDEBAR_STATUS.INITTIAL
    }

    /* ReactDOM.createPortal 将 元素 或者 组件 挂载到DOM树上的任意位置
    *  将 Sidebar 侧边栏 组件挂在到 body
    *  @see https://doc.react-china.org/docs/portals.html
    */
    render(){
        return ReactDOM.createPortal(
            [   // sidebar组件
                <aside 
                    id ='sidebar'  
                    key ='sidebar'
                    className ={this.state.asideClass}>
                    <Menu toggle ={this.toggleSidebarStatus} />
                </aside>,
                // layer层 点击隐藏sidebar
                <div
                    id="layer"
                    key="layer"
                    onClick = {this.toggleSidebarStatus}
                    className={this.state.layerClass}/>
            ],
            document.body
        ) 
    }
}

// 侧边栏组件
// redux 连接组件 HOC
export default connect( state => ({
    status: state.sidebar.status
}),{
    toggleSidebarStatus
})(Sidebar)