import React,{Component} from 'react';
import BottomBar from '@/components/BottomBar';
import '@/sass/Found.scss'
import foundiconf from './imgs/found.png'


class Found extends Component{
    render(){console.log('found')
        return (
            <div className="page found">
                <header className="found-header">
                    <h4>发现</h4>
                    <a href="javascript:;"><img src={foundiconf}/></a>   
                </header>

                <div className="main">
                    <div className="jewelry-nav">
                        <a href="javascript:;"><img src="http://www.chowtaiseng.com/image/web//upload/article//20180308/2018030814253577.jpg" style={{width:'100%',height:'100%'}}/></a>
                    </div>

                    <div className="navlist">
                        <a href="javascript:;">
                            <img src="http://www.chowtaiseng.com/image/web//upload/article/20170718/2017071810494197.png"/>
                            <div>
                                <p>珠宝发配</p>
                                <p>COLLOCATION</p>
                            </div>
                        </a>
                        <a href="javascript:;">
                            <img src="http://www.chowtaiseng.com/image/web//upload/article/20170718/2017071810544265.png"/>
                            <div>
                                <p>珠宝设计师</p>
                                <p>DESIGNER</p>
                            </div>
                        </a>
                        <a href="javascript:;">
                        <img src="http://www.chowtaiseng.com/image/web//upload/article/20170718/2017071810505022.png"/>
                        <div>
                            <p>珠宝学堂</p>
                            <p>JEWLLERY</p>
                        </div>
                        </a>
                    </div>
                </div>

                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Found;