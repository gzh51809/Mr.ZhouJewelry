import React,{Component} from 'react';
import BottomBar from '@/components/BottomBar';
import '@/sass/Custom.scss'
import customimg from './imgs/custom.png'


class Custom extends Component{
    render(){
        return (
            <div className="page custom">
                <div className="main">
                    <div className="custom-img">
                        <img src="http://www.chowtaiseng.com/image/web//upload/article//20180420/2018042014554447.jpg"/>
                    </div>

                    <div className="custom-btn">
                        <a href="javascript:;">
                        <img src={customimg}/>
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

export default Custom;