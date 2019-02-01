import React, { Component } from 'react';
import { NavBar, Button} from 'antd-mobile';
import '../sass/Mall.css';
import BottomBar from '../components/BottomBar'

import axios from 'axios';
import { Tabs, WhiteSpace } from 'antd-mobile';
import {connect} from 'react-redux';
import { Carousel } from 'antd-mobile';

class Mall extends Component{
    constructor(){
        super();
        this.state={
            tabs:[
                { title: '全部' },
                { title: '黄金' },
                { title: '铂金' },
                { title: 'k金' },
                { title: '钻石' },
            ],
            bannerImg:[],
            navlist:[]
        }
        //绑定handlechange事件
        this.handleChange = this.handleChange.bind(this)
    }
    //点击跳转搜索页
    handleChange(path){
        this.props.history.push('/search')
    }

    componentWillMount(){
        //轮播图
        axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=item.get.banner&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=22fb6e0459a66f6ca8454f28a0dea011')
        .then(res=>{
            this.setState({bannerImg:res.data.data})
        })

        //导航栏
        axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=item.list.category&params={%22platform_type%22:6,%22platform_category_code%22:%22A001%22,%22isindex%22:true}&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=caccd2ca9b40124928bad146478c4a3b')
        .then(res=>{console.log(res)
            this.setState({navlist:res.data.data.data.son})
            
        })
    }

    render(){
        console.log(this)
        return (
            <div className="mall page">
                {/* {头部} */}
                <NavBar
                mode="light"
                leftContent={"分类"}
                onLeftClick={ this.handleChange}
                rightContent="客服"
                >
                    <Button disabled style={{width:'270px',height:'35px',marginTop:'5px',background:'#ccc',borderRadius:' 20px'}} icon="search" className="searchBtn">珍珠吊坠</Button><WhiteSpace />
                    
                </NavBar>

                <div className="main">
                    <Carousel autoplay infinite>
                        {
                            this.state.bannerImg.map(item=>{
                                return <a key={item.article_id} style={{ display: 'inline-block', width: '100%', height:'200px' }}>
                                    <img src={item.article_img} style={{ width: '100%', }}/>
                                </a>
                            })
                        }
                    </Carousel>

                    <Tabs tabs={this.state.tabs}
                    >
                        {
                            this.state.navlist.map(item=>{
                                return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px'}}>
                                    {
                                        item.son.map(item=>{
                                            return <img src={item.img}/>
                                        })
                                    }
                                </div>
                            })
                            
                        }
                    </Tabs>
                </div>
                
                
                <footer>
                    <BottomBar/>
                </footer>
            </div>
        )
    }
}


let mapStateToProps = (state)=>{
    
    return {
      ...state
    }
}

Mall = connect(mapStateToProps)(Mall)
export default Mall