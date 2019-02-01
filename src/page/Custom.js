import React,{Component} from 'react';
import BottomBar from '../components/BottomBar';


class Custom extends Component{
    render(){
        return (
            <div className="page custom">
                <div className="main">
                    <h1>Custom</h1>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Custom;