import React, { Component } from 'react';
import { NavBar, Button} from 'antd-mobile';
import '../sass/Mall.css'
import '../sass/aa.scss'
// import {Route,Switch} from 'react-router-dom'
import { Tabs, WhiteSpace } from 'antd-mobile';

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
            ]
        }
        //绑定handlechange事件
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(path){
        this.props.history.push('/search')
    }
    
    render(){
        return (
            <div>
                {/* {头部} */}
                <NavBar
                mode="light"
                leftContent={"分类"}
                onLeftClick={ this.handleChange}
                rightContent="客服"
                >
                    <Button disabled style={{width:'7rem',height:'.8rem',marginTop:'.133333rem'}} icon="search" className="searchBtn">珍珠吊坠</Button><WhiteSpace />
                    
                </NavBar>

                <Tabs tabs={this.state.tabs}
                initalPage={'t2'}
                
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                </Tabs>
            </div>
        )
    }
}

// 利用withRouter高阶组件包装App组件
// Mall = withRouter(Mall);
export default Mall