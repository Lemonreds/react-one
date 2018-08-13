/**
 * header组件
 */
// react
import React from 'react'
// redux
import { connect } from 'react-redux'
import { toggleSidebarStatus } from '@/store/sidebar/action'
// util
import { getCurrentDate } from '@/utils/timer'
// components
import SideBar from '@/components/sidebar/sidebar'
import { Menu,Search } from '@/components/icons/icons'
// stlyes
import '@/styles/common/header.less'

class Header extends React.Component {

    componentWillMount(){
        /**
         *  TODO: 可以根据日期来选择图文列表 目前只能获取当天的图文列表
         *  
         *  获取当前的日期
         */
        this.date = getCurrentDate()
    }

    /**
     * @event [menu-icon]点击事件处理
     */
    handlerMenu(){
        // 触发 redux 事件,修改 sidebar 的可见性
        this.props.toggleSidebarStatus()
    }

    /**
     * @event [search-icon]点击事件处理
     */
    handlerSearch(){    
        console.log(' TODO: 新增搜索功能 ')
    }
    render(){
        return (
        <header className="cheader">
            <div className="menu">
                <div className="icon-contianer">
                    <Menu onClick={this.handlerMenu.bind(this)}/>
                </div>
            </div>
            <div className="time">
                <span className="focus">{ this.date.day }</span>
                <span className="nonFocus">{ this.date.month + this.date.year }</span>
            </div>
            <div className="search" onClick={ this.handlerSearch.bind(this)}>
                <div className="icon-contianer">
                    <Search />
                </div>
            </div>
            {/*  侧边栏 */}
            <SideBar/>
        </header>
        )
    }
}

// redux 连接组件 HOC
export default connect( state => ({
}),{
    toggleSidebarStatus
})(Header)