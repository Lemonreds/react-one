// react
import React from 'react'
import ReactDOM from 'react-dom'
// app
import App from './App'
// local cache
import registerServiceWorker from './registerServiceWorker'


/**
 * @author lemonreds
 * @see https://github.com/Lemonreds
 * @since 08 Aug. 2018
 */
ReactDOM.render(
    <App />,
    document.getElementById('root'))

registerServiceWorker()