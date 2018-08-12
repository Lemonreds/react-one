/**
 * 一个阅读的文章内容显示组件
 * 对 Article.jsx 加了一层初始化数据
 */

// react
import React from 'react'
import PropTypes from 'prop-types'
// api
import { fetch,url } from '@/api/'
// components
import Article from '@/components/article/index'
/**
 * 对 Article组件 的封装
 * 根据 id 和 type 请求文章的信息
 * type 不同解析数据也不同
 * 获取到的数据交给 Article 展示
 */
class WrapperArticle extends React.Component {
    
    static propType = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }

    constructor(props){
        super(props)
        this.state = {
            title: '',
            authorName: '',
            authorInfo: {},
            content: ''
        }
    }    

    componentDidMount(){
        this.fetchDetails()
    }

    /**
     * 交由Article展示内容
     */
    render(){
        return (<Article {...this.state}/>)
    }    
    /**
    * 获取内容详情
    */
    fetchDetails(){
        // 类型为 serial 连载时 修正类型为serialcontent
        // 原因: API接口接收的类型是 /serialcontent/:id
        let type = this.props.type
        if(type === 'serial') type = 'serialcontent'

        fetch({
            url: url.reading.getDetails
                .replace(':type',type)
                .replace(':id',this.props.id)
        }).then( response =>{
            if( response.res === 0){
                const parseData = this.parseFields(this.props.type,response.data)
                this.setState(parseData)
            }
        })
    }

    /**
     * 
     * 解析响应信息
     * @param {string} type 
     * @param {object} data 
     * @return {object}
     */
    parseFields(type,data){
        // 短文
        if(type === 'essay'){
            return {
                title: data.hp_title,
                content: data.hp_content,
                authorName: data.hp_author,
                authorInfo: data.author[0]
            }
        }
        // 问答
        if(type === 'question'){
            return {
                title: data.question_title,
                content: data.answer_content,
                authorName: data.author_list[0].user_name,
                authorInfo: data.author_list[0]
            }
        }
        // 连载
        if(type === 'serial'){
            return {
                title:  data.title,
                content: data.content,
                authorName: data.author.user_name,
                authorInfo: data.author
            }
        }
        return {}
    }
}


export default WrapperArticle