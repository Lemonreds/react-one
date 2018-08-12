// react
import React from 'react'
// components
import { Redirect } from 'react-router-dom'
import Banner from '@/components/common/banner'
// banner Type
import BANNER_STYLE from '@/one/banner'

function Graphic(props) {
    return (
    <div className="page-graphic-graphic">
    {
        /**
         * 非法跳转 则重定向回主页
         */
        (typeof props.location.state.banner === 'undefined') && <Redirect to={{pathname: '/'}} />
    }
    {
        /*
        * 图文展示 指定显示的样式
        */
        <Banner 
            style={BANNER_STYLE.GRAPIHC} 
            banner={props.location.state.banner}/>
    }
    </div>)
}

export default Graphic