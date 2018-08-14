// react
import React from 'react'
// api
import { fetch,url } from '@/api/'
// components
import MusicPlayer from '@/components/musicPlayer/'
import Article from '@/components/article/index'
import Comment from '@/components/comments/comments'

class Music extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            music: {
                name: '',
                singer: '',
                album: '',
                url:''
            },
            article:{
                title: '',
                authorName: '',
                authorInfo: {},
                content: ''
            }
        }

        this.id = this.props.match.params.id
        this.type = 'music'
    }

    componentDidMount(){
        this.fetchMusicDetail()
    }

    fetchMusicDetail(){
        fetch({
            url: url.music.getMusic.replace(':id',this.id)
        }).then( response =>{
            if(response.res === 0){
                const data = response.data
                // console.log(data)
                this.setState({
                    music:{
                        name: data.title,
                        singer: data.author.user_name,
                        album: data.album,
                        cover: data.cover,
                        // TODO:部分音乐源会错误...
                        url: data.music_id
                    },
                    article:{
                        title: data.story_title,
                        authorName: data.author_list[0].user_name,
                        authorInfo: data.author_list[0],
                        content: data.story
                    }
                })
            }
        })
    }
   
    render() {
        return (
            <div className = "page-music">
                {
                    this.state.music.name !== '' && <MusicPlayer  {...this.state.music}/>
                }
                <Article {...this.state.article }/>
                <Comment id={this.id} type={this.type}/>
            </div>
        )
    }

}

// 音乐页面
export default Music