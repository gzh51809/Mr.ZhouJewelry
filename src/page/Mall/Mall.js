import React, { Component,PureComponent } from 'react';
import { NavBar, Button} from 'antd-mobile';
import '@/sass/Mall.css';
import BottomBar from '@/components/BottomBar';
import MallSpecial from './MallSpecial';
import MallRecommend from './MallRecommend';
import MallLikes from './MallLikes';

import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
import { Tabs, WhiteSpace } from 'antd-mobile';
import {connect} from 'react-redux';
import { Carousel } from 'antd-mobile';
import { Icon } from 'antd-mobile';

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
            navlist:[],
            special:[],
            recommend:[],
            likes:[],
        }
        //绑定handlechange事件
        this.handleChange = this.handleChange.bind(this)
    }
    //点击跳转搜索页
    handleChange(){
        this.props.history.push('/search')
    }

    componentWillMount(){
        //轮播图
        axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=item.get.banner&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=22fb6e0459a66f6ca8454f28a0dea011')
        .then(res=>{
            this.setState({bannerImg:res.data.data})
        }).catch((err)=>{
            console.log(err);
        })

        //导航栏
        axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=item.list.category&params={%22platform_type%22:6,%22platform_category_code%22:%22A001%22,%22isindex%22:true}&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=caccd2ca9b40124928bad146478c4a3b')
        .then(res=>{console.log('aaaaa:',res)
            this.setState({navlist:res.data.data.data.son})
            
        }).catch((err)=>{
            console.log(err);
        })

        //专题产品
        axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=item.goods.special.list&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=22fb6e0459a66f6ca8454f28a0dea011')
        .then(res=>{
            this.setState({special:res.data})
        }).catch((err)=>{
            console.log(err);
        })

        //人气推荐
        axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=item.get.goods.pop&params={%22platform_type%22:5}&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=5b0b9d9d3c43d413437f3aa2f24c4797')
        .then(res=>{
            this.setState({recommend:res.data.data})
        }).catch((err)=>{
            console.log(err);
        })

        //猜你喜欢
        axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=member.guess.you.like&params={%22platform_type%22:5}&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=5b0b9d9d3c43d413437f3aa2f24c4797')
        .then(res=>{
            this.setState({likes:res.data.data})
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return (
            <div className="mall page">
                {/* {头部} */}
                <NavBar
                mode="light"
                leftContent={
                    <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-sort" style={{color:'#000'}}></use>
                    </svg>
                }
                rightContent={
                    <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-service_light" style={{color:'#000'}}></use>
                    </svg>
                }
                >
                    <Link 
                    
                    style={{width:'13.933333rem',height:'1.52rem',marginTop:'5px',background:'#e3e3e3',borderRadius:' 20px',color:'#646464',fontSize:' 0.72rem',paddingLeft:' 10px',paddingTop: '3px',display:'block'}} 
                    icon="search" 
                    className="searchBtn"
                    to="/search"
                    >
                        <Icon type="search" style={{color:'#333', position: 'relative',top: '4px',marginRight: '5px'}} size="xs"/>
                        <span>珍珠吊坠</span>
                    </Link>
                    
                </NavBar>

                <div className="main">
                    <Carousel autoplay infinite style={{height:'262.5px'}}>
                        {
                            this.state.bannerImg.map(item=>{
                                return <a key={item.article_id} style={{ display: 'inline-block', width: '100%', height:'262.5px' }} href="javascript:;">
                                    <img src={item.article_img} style={{ width: '100%', }}/>
                                </a>
                            })
                        }
                    </Carousel>

                    <Tabs tabs={this.state.tabs} tabBarActiveTextColor='#ddc17f' tabBarUnderlineStyle={{ backgorundcolor:'#ddc17f'}}>
                        {
                            this.state.navlist.map(item=>{
                                if(item.platform_category_id === undefined){
                                    item.platform_category_id = 111
                                }
                                return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:'200px',flexFlow:'row wrap',justifyContent: 'space-between',}} key={item.platform_category_id}>
                                    {
                                        item.son.map(item=>{
                                            return <Link to={{
                                                pathname: '/goodslist/'+ item.platform_category_code,
                                                search:item.platform_category_code
                                                }} 
                                                key={item.platform_category_code}>
                                                    <img src={item.img}/>
                                                </Link>
                                        })
                                    }
                                </div>
                            })
                            
                        }
                    </Tabs>

                    <MallSpecial special={this.state.special}/>
                    
                    <MallRecommend recommend={this.state.recommend}/>

                    <MallLikes likes={this.state.likes}/>
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

// 利用withRouter高阶组件包装BottomBar组件
Mall = withRouter(Mall);


Mall = connect(mapStateToProps)(Mall)
export default Mall