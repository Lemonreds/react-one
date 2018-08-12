//react
import React from 'react'
import PropTypes from 'prop-types'
// react-route
import { Link } from 'react-router-dom'
// icons
import { Close } from '@/components/icons/icons'

// 菜单列表和点击跳转的Route
const MENU_LIST = [{
    label: 'ONE',
    route: '/'
},{
    label: '图文',
    route: '/graphic'
},{
    label: '阅读',
    route: '/reading' 
},{
    label: '关于',
    route: '/about'
}]

class Menu extends React.Component {

    // props类型检查
    static propType = {
        // 关闭 sidebar 的回调函数
        toggle: PropTypes.func.isRequired
    }

    render(){
        return (
        <div className="sidebar-menu">
            <ul className="menu">
            {
                    MENU_LIST.map((item,idx)=>(
                        <Link key={idx} to={item.route} onClick={this.props.toggle}>
                            <li>
                                { item.label }
                            </li>
                        </Link>
                    ))
                }
            </ul>
            <Close onClick={this.props.toggle}/>
        </div>)
    }
}

// 菜单内容组件
export default Menu