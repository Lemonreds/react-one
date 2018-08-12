// react
import React from 'react'
// icontainer
import container from './base'

/**
 * 生成一个 i 组件
 * @param {string} className 
 */
function generate(className){
    return class extends React.Component{
        render(){
            return (
            <i 
            className={`iconfont ${className}`} 
            onClick={this.props.onClick}
            style={{cursor:'pointer'}}/>)
        }
    }
}

// icons
// Home
const Home = container(generate('icon-home')) 
// Menu
const Menu = container(generate('icon-menu'))
// Close
const Close = container(generate('icon-close'))
// Search
const Search = container(generate('icon-search'))

export {
    Home,
    Menu,
    Close,
    Search
}