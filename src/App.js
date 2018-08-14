// React
import React, { Component } from 'react'
// React-Router
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// Redux
import { Provider }  from 'react-redux'
import store from '@/store/'
// Pages
import Home from '@/pages/home/index'
import Graphic from '@/pages/graphic/index'
import Reading from '@/pages/reading/index'
import Movie from '@/pages/movie/index'
import Music from '@/pages/music/index'
import About from '@/pages/about/index'
import NoMatch from '@/pages/nomatch/index'
// Components
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
// Styles
import '@/styles/app.less'

// App
class App extends Component {
  render() {
    return (
        <Provider store = {store}> 
          <Router> 
            <div className='app'>
              <Header />
                <Switch>
                  {/* 首页 */}
                  <Route exact path='/' component={Home} />
                  {/* 阅读 */}
                  <Route path='/reading' component={Reading} />
                  {/* 图文 */}
                  <Route  path='/graphic' component={Graphic} />
                  {/* 电影 */}
                  <Route path='/movie/:id' component={Movie} />
                  {/* 音乐 */}
                  <Route path='/music' component={Music} />
                  {/* 关于 */}
                  <Route path='/about' component={About} />
                  {/* 未匹配到的路由 */}
                  <Route component={NoMatch} />
                </Switch>
              <Footer />
            </div>
          </Router>   
        </Provider>
    )
  }
}

// dev - redux state 修改时输出
// store.subscribe(() =>
//   console.log(store.getState())
// )
export default App