import React,{Component} from 'react';
import '@/sass/GoodsList.scss';

import axios from 'axios';

class GoodsList extends Component{
    
    componentWillMount(){
        let {goodsId} = this.props.match.params;
        axios
        .get('http://www.chowtaiseng.com/ishop/web/', {
            params: {
                app_act: 'api/',
                method: 'item.list.items',
                params: {"cat_code":goodsId,"platform_type":5,"orderby":"sku_price DESC"},
                sid: '2jm0sfbmvb3fcrdfg9hfkik1u5',
                sign: 'a01526473755aec3232760cfbac53fa4'
            }
        })
        .then(res=>{
            console.log(res)
        })
    }
    render(){
        return (
            <div className="page GoodsList">
                <header>
                    <div className="headerCenter">
                        <div className="headerL">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-back" style={{color:'#000'}}></use>
                            </svg>
                        </div>

                        <div className="headerC">
                            <span>专区</span>
                        </div>

                        <div className="headerR">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-sort" style={{color:'#000'}}></use>
                            </svg>
                        </div>
                    </div>
                </header>

                <div className="main">
                    
                </div>

            </div>
            
        )
    }
}

export default GoodsList;