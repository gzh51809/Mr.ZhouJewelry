import React,{Component} from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class MallRecommend extends Component{
    render(){
        console.log(this)
        return (
            <div className="mall-recommend">
                    <div className="recommend-header">
                        <h3 className="recommend-h3">人气推荐</h3>
                        <a href="javascript:;">More</a>
                    </div>

                    <div className="recommend-comten">
                        <List className="my-list">
                            {
                                this.props.recommend.map(item=>{
                                    return <Item thumb={item.pic}>
                                        {item.goods_name} 
                                        <Brief>{item.goods_aliases_name}</Brief>
                                        <span>￥{item.sku_price}</span><del>{item.sell_price>0 ? '￥'+item.sell_price : ''}</del>
                                    </Item>
                                }) 
                            }
                        </List>  
                    </div>
            </div>
            
        )
    }
}

export default MallRecommend;