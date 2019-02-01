import React,{Component} from 'react';
import BottomBar from '../components/BottomBar';


class Mine extends Component{
    render(){
        return (
            <div className="page mine">
                <div className="main">
                    <h1>Mine</h1>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Mine;