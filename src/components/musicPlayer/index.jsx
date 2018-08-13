// react
import React from 'react'
import PropTypes from 'prop-types'
// icon
import { Play,Pause } from '@/components/icons/icons'
// stlyes
import '@/styles/music/music.less'

const STATUS_PLAY = true 
const STATUS_PAUSE = false
class MusicPlayer extends React.Component {

     // props 类型检查
     static propTypes = {
        name: PropTypes.string.isRequired,
        singer: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }
    
    constructor(props){
        super(props)
        this.state = {
            status : STATUS_PAUSE,
            playClass: 'animate-pause',
            progressStyle: {
                display: 'none'
            }
        }
    }
    
    componentDidMount(){
        this.audio = document.getElementById('audio')
    }
    
    /**
     * 播放和暂停处理
     */
    handlerStatus(){
        this.setState( prevstate=>{
            let status = !prevstate.status,
                playClass = '',
                progress = 0
            if(status === STATUS_PLAY){
                playClass = 'animate-rotate'
            }else{
               
                playClass = 'animate-pause'
            }   

            this.audio.paused  ? this.audio.play() : this.audio.pause()

            return {
                status,
                playClass,
                progress
            }
        })       
        
    }
    
    
    render(){
        return (
        <div className="music-player">
            <audio id="audio" src={this.props.url} />
            <div className="cover">
                <img
                    className={this.state.playClass}  
                    src={this.props.cover}  
                    alt="one is all" />
                <div 
                className='play-container' 
                onClick={this.handlerStatus.bind(this)}>
                    {
                        this.state.status === STATUS_PAUSE 
                        ? <Play className="play-btn"/>
                        : <Pause className="play-btn" />
                    }
                </div>
            </div>

            <p className="author">
                { this.props.name } by { this.props.singer}
            </p>
        </div>
        )
    }
}

export default MusicPlayer