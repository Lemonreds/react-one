// react
import React from 'react'
// api
import { fetch,url } from '@/api/'
// components
import Forward from '@/components/common/forward'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            readingList : []
        }
    }
    
    componentDidMount(){
        this.fetchReadingList()
    }

    /**
     * 初始化阅读列表
     */
    fetchReadingList(){
        fetch(url.reading.getReading)
        .then( response =>{
            if(response.res === 0){
                this.setState({
                    readingList: response.data
                })
            }
        })
    }

    /**
     * 获取更多的阅读列表
     */
    fetchMoreReading(){
        const id = this.state.readingList[this.state.readingList.length-1].id
        fetch(url.reading.getMoreReading.replace(':id',id))
        .then( response => {
            if(response.res === 0){
                this.setState(prevState=>({
                    readingList: prevState.readingList.concat(response.data)
                }))
            }
        })

    }


    render() {
        return (
            <div className="page-reading-home">
                {
                    this.state.readingList.map( (item,idx)=>(
                        <Forward 
                            key={idx}
                            {...item}
                        />
                    ))
                }

                <div style={{ textAlign:'center',margin: '20px 0'}}>
                    <button className="common-button" onClick={this.fetchMoreReading.bind(this)}>获取更多文章</button>
                </div>
            </div>)
    }
}

export default Home