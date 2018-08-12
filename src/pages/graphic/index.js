// react
import React from 'react'
// components
import { Route,Switch } from 'react-router-dom'
import Home from './home'
import Graphic from './graphic'

function Index({match}) {
    /**
     * graphic页面路由
     * /graphic/    主页 显示10条图文信息
     * /graphic/id  子页 显示一条图文信息
     */
    return (<div className="page-graphic">
        <Switch>
            <Route path={`${match.url}/`} exact component={Home} />
            <Route path={`${match.url}/:id`} component={Graphic} />
        </Switch>
    </div>)
}

// 图文页面
export default Index