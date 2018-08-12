// react
import React from 'react'
import PropTypes from 'prop-types'
// components
import Comments from '@/components/comments/comments'
import Article from './wrapperArticle'

class Reading extends React.Component {
    
    // 限制只能由 Route 调用该组件
    static propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
    }
    constructor(props){
        super(props) 
        this.init()
    }
    /**
     * 根据路由传入的来获取 type 和 id
     * example:
     *      "/reading/:type/:id"  => 
     *          id: id 
     *          type: essay / serial / question
     */
    init(){
        this.route = {
            id: this.props.location.state.id,
            type: this.props.location.state.type
        } 
    }
    render(){
        return (
            <article className="page-reading-reading">
                <div className="reading-inner">
                    <Article {...this.route} />
                    <Comments {...this.route} />
                </div>
            </article>)
    }
}

export default Reading