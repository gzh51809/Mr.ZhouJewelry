import React, { Component } from 'react';
import { NavBar, Icon, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import '../sass/Mall.css'
import '../sass/aa.scss'



class Mall extends Component{
    constructor(){
        super();

    }

    render(){
        return (
            <div>
                {/* {头部} */}
                <NavBar
                mode="light"
                leftContent={"分类"}
                onLeftClick={() => console.log(this.props)}
                rightContent="客服"
                >
                    <Button disabled style={{width:'7rem',height:'.8rem',marginTop:'.133333rem'}} icon="search" className="searchBtn">珍珠吊坠</Button><WhiteSpace />
                    
                </NavBar>

                
            </div>
        )
    }
}
export default Mall