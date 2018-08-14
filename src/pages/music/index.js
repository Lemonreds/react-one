// react
import React from 'react'
// components
import { Route,Switch } from 'react-router-dom'
import Home from './home'
import Music from './music'

function Index({match}) {
    /**
     * music 页面路由
     * /music/    主页 获取音乐频道最新的10条图文
     * /music/id  子页 显示一条音乐
     */
    return (<div className="page-music">
        <Switch>
            <Route path={`${match.url}/`} exact component={Home} />
            <Route path={`${match.url}/:id`} component={Music} />
        </Switch>
    </div>)
}

// 图文页面
export default Index