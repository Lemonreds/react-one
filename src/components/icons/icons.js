// react
import React from 'react'

/**
 * 生成一个 i 组件
 * @param {string} className 
 */
function generate(className){
    return class extends React.Component{
        render(){
            return (
            <i 
            {...this.props}
            className={`iconfont ${className}`} 
            style={{cursor:'pointer'}}/>)
        }
    }
}

// icons
// Home
const Home = generate('icon-home')
// Menu
const Menu = generate('icon-menu')
// Close
const Close = generate('icon-close')
// Search
const Search = generate('icon-search')
// Music
const Play = generate('icon-play')
const Pause = generate('icon-pause')

export {
    Home,
    Menu,
    Close,
    Search,
    Play,
    Pause
}