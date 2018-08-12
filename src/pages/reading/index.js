// react
import React from 'react'
// components
import { Route,Switch } from 'react-router-dom'
import Home from './home'
import Reading from './reading'

function Index({match}) {
    /**
     * reading页面路由
     * /reading/    主页 获取最新的阅读信息
     * /reading/essay/:id  子页 显示一篇文章图文信息 类别可以是 问答/短文/连载
     * /reading/question/:id  
     * /reading/serial/:id
     */
    return (<div className="page-reading">
        <Switch>
            <Route path={`${match.url}/`} exact component={Home} />
            <Route path={`${match.url}/question/:id`} component={Reading} />
            <Route path={`${match.url}/essay/:id`} component={Reading} />
            <Route path={`${match.url}/serial/:id`} component={Reading} />
        </Switch>
    </div>)
}

// 阅读页面
export default Index