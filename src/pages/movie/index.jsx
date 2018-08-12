// react
import React from 'react'
// api
import { fetch,url } from '@/api/'
// component
import Article from '@/components/article/index'
import Comments from '@/components/comments/comments'
// styles
import '@/styles/pages/movie.less'

class Movie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            authorName: '',
            authorInfo: {},
            content: ''
        }
        this.init()
    }

    /**
     * 初始化路由信息
     */
    init(){
        this.id = this.props.match.params.id
        this.type = 'movie'
    }

    componentDidMount() {

        fetch(url.movie.getMovieStory.replace(':id', this.id))
        .then(response =>{
            if(response.res === 0){
                const data = response.data.data[0]
                this.setState({
                    title: data.title,
                    content: data.content,
                    authorName: data.author_list[0].user_name,
                    authorInfo: data.author_list[0]
                })
            }
        })

    }
    render() {
        return (
            <div className = "page-movie">
                <Article {...this.state}/>
                <Comments type={this.type} id={this.id} />
            </div>
        )
    }

}

// 电影页面
export default Movie