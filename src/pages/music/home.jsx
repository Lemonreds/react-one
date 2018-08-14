// react
import React from 'react'
// api
import { fetch, url } from '@/api/'
// 
import { Link } from 'react-router-dom'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state =　{
            musicList : []
        }
    }

    componentDidMount(){
        this.fetchMusicList()
    }

    /**
     * @method
     * 获取音乐频道最新的10条信息
     */
    fetchMusicList(){
        fetch({
            url: url.music.getMusicList
        }).then( response =>{
            if(response.res === 0){
                // console.log(response)
                this.setState( prevState => ({
                    musicList: prevState.musicList.concat(response.data)
                }))
            }
        })
        
    }    
   
    render() {
        return (
            <ul className="page-music-home">
                {
                    this.state.musicList.map( (item,idx) => ( 
                        <li key={idx} className="music-inner">
                            <Link to={`/music/${item.item_id}`}>
                                <div className="bgr"
                                 style={{ backgroundImage: `url(${item.img_url})`}} 
                                 alt="one is all" >
                                <h3>{ item.title } </h3>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>)
    }
}

// 音乐主页
export default Home