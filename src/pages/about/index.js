// react
import React from 'react'
// styles
import '@/styles/pages/about.less'

function Links({href,website}) {
    return (
        <a target="_blank" href={href} className="about-link">
            {website}
        </a>
    )
}

class About extends React.Component {

    render() {
        return (
            <div className = "page-about">
                <img src="http://image.wufazhuce.com/app_download.png" alt="one is all"/>
                <p className="about-title">
                    ONE·一个 每日阅读
                </p>
                <p className="about-content">
                    「ONE · 一个」 <Links href="http://m.wufazhuce.com"  website="「ONE · 一个」"/><br/>
                     基于react,react-redux,react-router,仅供学习使用. <br/>
                     @author : Lemonreds <br/>
                     @since : 2018-08-08 <br/>
                     @see more: <Links href="https://github.com/Lemonreds/react-one"  website="Github"/><br/>
                     
                </p>
            </div>
        )
    }
}

// 关于页面
export default About