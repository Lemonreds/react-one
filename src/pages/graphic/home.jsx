// react
import React from 'react'
// redux
import { connect } from 'react-redux'
// api
import { fetch, url } from '@/api/'
// components
import { Link,Redirect } from 'react-router-dom'
import Banner from '@/components/common/banner'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }
    /**
     * 获取近期10个图文信息
     */
    componentDidMount(){
        this.fetchGraphicList()
    }
    /**
     * @method 获取近期10个图文信息
     * 只有单个请求的API接口 所以需要发送10次请求
     * 然后再进行日期排序 
     */
    fetchGraphicList(){
        this.props.idList.forEach( id =>{
            fetch(url.index.getOneList.replace(':id',id)).then( response => {
                this.setState( prevState =>({
                    items: prevState.items.concat(response.data.content_list[0])
                }))
            })
        })
    }
    /**
     * 需要排序内容 所以减少渲染次数 避免频繁render
     */
    componentWillUpdate(){
        return  this.state.items.length === 5 || this.state.items.length === 10
    }

    render() {
        return (
            <div className="page-graphic-home">
            {
                // 如果不是从首页跳转进来图文页 则不会初始化redux中的idList数据
                // 重定向回首页
                // 也可以在此组件内发起一个 getIdList 初始化 idList
                this.props.idList.length === 0 && <Redirect to={{pathname: '/'}} />
            }
            {
                //
                // 排序图文信息后渲染
                //
                this.state.items.sort((a,b) =>{
                    return a.post_date < b.post_date ? 1 : -1
                }).map( (item,idx)=>(

                    // 点击图文后跳转到单个显示页面 
                    // url: /graphic/15943
                    <Link to={{
                            pathname: `${this.props.match.url}/${item.id}`,
                            state: {
                                banner: item
                            }
                        }} key={idx}>
                        <Banner  banner={ item } />     
                    </Link>
                ))
            }
            </div>)
    }
}

// redux 连接组件 HOC
export default connect( state => ({
    idList: state.index.idList
}),{})(Home)