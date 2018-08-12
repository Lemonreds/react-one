/**
 * banner组件
 */
import React from 'react'
import PropTypes from 'prop-types'
// api
import { fetch,url } from '@/api/'
// components
import Subject from '@/components/common/subject'
// styles
import '@/styles/comments/comments.less'

/*
* 单层评论组件
*/
function Item(props){
    return(
        <li className="comments-item">
            <div className="comments-item-user">
                <img alt="one is all" src={ props.item.user.web_url}/>
                <span>{ props.item.user.user_name }</span>
                <span>{ props.item.created_at}</span>
            </div>
            <p className="comments-item-content">
                { props.item.content }
            </p>
        </li>)
}
/**
 *  获取剩余的评论
 */
function MoreComments(props){

    let inner 
    if(props.count > 0){
        inner = (
        <button className="common-button" onClick={props.cb}>
            还有剩余 <span style={{ fontSize:'17px' }}>{ props.count } </span>  条评论
        </button>)
    }else{
        inner = ( 
        <button className="common-button">
            没有更多的评论了
        </button>)
    }

    return (
        <div style={{ textAlign:'center',margin: '20px 0'}}>
            { inner }           
        </div>
    )
}


class Comments extends React.Component {
    // props 类型检查
    static propTypes = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }
    
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            data: []
        }
    }

    componentDidMount(){
        this.fetchComments()
    }

    /**
     * @method
     * 获取评论内容
     */
    fetchComments() {
        fetch({
           url: url.comments.getComments
                .replace(':type', this.props.type)
                .replace(':id', this.props.id)}
        )
        .then(response => {
            if( response.res === 0 ){
                this.setState({
                    count: response.data.count,
                    data: response.data.data
                })
            }
        })
    }

    /**
     * @event 加载更多评论
     * 获取下一页的评论
     */
    fetchMoreComments(){
        fetch({
           url: url.comments.getMoreComments
                .replace(':type', this.props.type)
                .replace(':id', this.props.id)
                .replace(':lastcommentid', this.state.data[this.state.data.length-1].id)
            }
        )
        .then(response => {
            if( response.res === 0 ){
               this.setState( prevState => ({
                   count: response.data.count,
                   data: prevState.data.concat(response.data.data)
               }))
            }
        })
    }

    render() {
        return (
        <div className = "comments" >
            <Subject subject="评论" />
            <ul className="comments-list">
            {
                this.state.data.map((item,idx)=>(
                    <Item key={idx} item={item}/>
                ))
            }
            </ul>
            {/* 点击 加载更多评论 */}
            <MoreComments 
            cb = { this.fetchMoreComments.bind(this) }
            count={this.state.count - this.state.data.length} />
        </div>)
    }
}
// 评论组件
export default Comments