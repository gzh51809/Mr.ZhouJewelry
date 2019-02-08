import React,{Component} from 'react';
import { List } from 'antd-mobile';

class MallRecommend extends Component{
    render(){
        return (
            <div className="page mall-recommend">
                <div className="main">
                    <div className="recommend-header">
                        <h3 className="recommend-h3">人气推荐</h3>
                        <a href="javascript:;">More</a>
                    </div>

                    <div className="recommend-comten">
                        <List className="my-list">
                            {
                               this.props.recommend.map(item=>{
                                   return <Item thumb={item.pic}>{item.goods_name}</Item>
                               }) 
                            }
                        </List>  
                    </div>
                </div>
            </div>
            
        )
    }
}

export default MallRecommend;