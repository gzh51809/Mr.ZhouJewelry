import React,{Component} from 'react';
import BottomBar from '@/components/BottomBar';
import '@/sass/Mine.scss';
import koro from './imgs/koro.jpg';
import { Grid } from 'antd-mobile';


class Mine extends Component{
    constructor(){
        super();
        this.state = {
            nav:[
                {
                    text:'全部订单',
                    path:'/mall',
                    name:'Form',
                    icon:'#icon-calendar'
                },{
                    text:'待付款',
                    path:'/found',
                    name:'Payment',
                    icon:'#icon-sponsor'
                },{
                    text:'待发货',
                    path:'/custom',
                    name:'SendGoods',
                    icon:'#icon-feiji'
                },{
                    text:'待收货',
                    path:'/cart',
                    name:'TakeGoods',
                    icon:'#icon-shop'
                },{
                    text:'待评价',
                    path:'/mine',
                    name:'Evaluate',
                    icon:'#icon-edit_light'
                },{
                    text:'售后',
                    path:'/aftersale',
                    name:'AfterSale',
                    icon:'#icon-my'
                  },
            ],
            link:[
                {
                    text:'喜欢',
                    path:'/love',
                    name:'LOVE',
                    icon:'#icon-crown'  
                },{
                    text:'卡券',
                    path:'/coupon',
                    name:'COUPON',
                    icon:'#icon-news'  
                },{
                    text:'专属服务',
                    path:'/servlce',
                    name:'SERVLCE',
                    icon:'#icon-my'  
                },{
                    text:'在线服务',
                    path:'/onlineservlce',
                    name:'ONLINE SERVLCE',
                    icon:'#icon-service_light'  
                }
            ]
                 
        }
    }

    render(){
        return (
            <div className="page mine">
                <header className="mine-header">
                    <div className="seting">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-settings_light" style={{color:'#000'}}></use>
                        </svg>
                    </div>

                    <div className="userbox">
                        <div className="userimg">
                            <img src={koro} style={{width:'100%',height:'100%'}}/>
                        </div>
                        <p>koro</p>
                    </div>
                </header>
                <div className="main">
                    <div className="mine-nav">
                        {
                            this.state.nav.map(item=>{
                                return (
                                    <div key={item.path}>
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref={item.icon} ></use>
                                        </svg>
                                        <p>{item.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="mine-link">
                        {
                            this.state.link.map(item=>{
                                return (
                                    <div className="link-box" key={item.path}>
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref={item.icon} ></use>
                                        </svg>
                                        <p>{item.text}</p>
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })
                        }

                        <div className="link-round">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-evaluate" ></use>
                            </svg>
                            <p>门店指引</p>
                            <span>MAP</span>
                        </div>
                    </div>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Mine;