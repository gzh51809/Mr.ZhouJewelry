import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';
import '@/sass/Mall.css';

class MallSpecial extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="mall-special" >
                <h3 className="special-h3">专题产品</h3>
                <Carousel dots={false} cellSpacing={10} slideWidth="200px" infinite style={{marginBottom:'20px',boxShadow:' 0px 7px 6px #e9e9e9'}}>
                    {
                        this.props.special.map(item=>{
                            return <a key={item.article_id} style={{ width: '200px', }} href="javascript:;">
                                <img src={item.article_img} style={{ width: '100%', }}/>
                            </a>
                        })
                    }
                </Carousel>

                <div className="specialImg">
                    <a href="javascript:;"><img src='http://www.chowtaiseng.com/image/web//upload/article/20181020/2018102009375858.jpg' style={{ width: '100%', }}/></a>
                </div> 
            </div>
            
        )
    }
}

export default MallSpecial;