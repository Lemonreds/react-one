/**
 * footer组件
 */
// react
import React from 'react'
// stlyes
import '@/styles/common/footer.less'

class Footer extends React.Component {
    render(){
        return (
        <footer className="cfooter">
            <div className="cfooter-inner">
                One is All, All is one
            </div>
        </footer>
        )
    }
}

// 通用底部组件
export default Footer