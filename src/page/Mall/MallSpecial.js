import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';
import '@/sass/Mall.css';

class MallSpecial extends Component {
    render(){
        return (
            <div className="mall-special" style={{height:'110px'}}>
                <h3 className="special-h3">专题产品</h3>
                <Carousel dots={false} cellSpacing={10} slideWidth="200px" infinite >
                    {
                        this.props.special.map(item=>{
                            return <a key={item.article_id} style={{ width: '200px', }} href="javascript:;">
                                <img src={item.article_img} style={{ width: '100%', }}/>
                            </a>
                        })
                    }
                </Carousel>
            </div>
            
        )
    }
}

export default MallSpecial;