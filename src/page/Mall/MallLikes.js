import React,{Component} from 'react';
import '@/sass/Mall.css';

class MallLikes extends Component{
    render(){
        console.log(this)
        return (
            <div className="mall-likes">
                <h3 className="likes-h3">猜你喜欢</h3>
                <ul className="clearfix">
                    {
                        this.props.likes.map(item=>{
                            return <li className={item.goods_id} key={item.goods_id}>
                                <img src={item.pic}/>
                                <div className="likes-goods">
                                    <h4>{item.goods_name}</h4>
                                    <span>￥{item.sale_price}</span><del>{item.sku_price==item.sale_price ? '': '￥'+item.sku_price }</del>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )

    }
}

export default MallLikes;