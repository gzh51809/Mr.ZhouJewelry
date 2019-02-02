import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom';

class BottomBar extends Component{
    constructor(){
        super();
        this.state = {
            menu:[
                {
                  text:'商城',
                  path:'/mall',
                  name:'Mall',
                  icon:'#icon-jiezhi'
                },{
                  text:'发现',
                  path:'/found',
                  name:'Found',
                  icon:'#icon-faxian'
                },{
                  text:'定制',
                  path:'/custom',
                  name:'Custom',
                  icon:'#icon-zuanshi'
                },{
                  text:'购物车',
                  path:'/cart',
                  name:'Cart',
                  icon:'#icon-icon01'
                },{
                  text:'个人',
                  path:'/mine',
                  name:'Mine',
                  icon:'#icon-geren'
                },
              ],     
              selectedTab:'Mall'
        }
    }

    componentDidMount(){
        let hash = window.location.hash.split('/')[1];
        this.setState({
            selectedTab:'/'+hash
        })
    }

    render() {
        return (
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#ddc17f"
            barTintColor="white"
            noRenderContent="true"
            tabBarPosition="bottom"
            >
            {
                this.state.menu.map(menu=>{
                return (
                    <TabBar.Item
                    title={menu.text}
                    key={menu.name}
                    icon={
                        <svg className="icon" aria-hidden="true">
                        <use xlinkHref={menu.icon}></use>
                        </svg>
                    }
                    selectedIcon={
                        <svg className="icon" aria-hidden="true">
                        <use xlinkHref={menu.icon}></use>
                        </svg>
                    }
                    selected={this.state.selectedTab === menu.path}
                    onPress={()=>{
                        this.setState({
                        selectedTab:menu.path,
                        });
                        this.props.history.push(menu.path)                   
                    }  
                    }
                    >
                    
                    </TabBar.Item>
                )
                })
            }
            </TabBar>
        );
    }
}

// 利用withRouter高阶组件包装BottomBar组件
BottomBar = withRouter(BottomBar);

export default BottomBar;