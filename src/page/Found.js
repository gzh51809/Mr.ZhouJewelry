import React,{Component} from 'react';
import BottomBar from '../components/BottomBar';


class Found extends Component{
    render(){
        return (
            <div className="page found">
                <div className="main">
                    <h1>Found</h1>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Found;