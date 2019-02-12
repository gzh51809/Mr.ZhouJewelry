import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import Cart from './page/Cart/Cart';
import Mall from './page/Mall/Mall';
import Custom from './page/Custom/Custom';
import Found from './page/Found/Found';
import Mine from './page/Mine/Mine';
import Search from './page/Mall/Search'
import axios from 'axios';
import { connect } from 'react-redux';
import {add} from './actions/mallAction';
import './sass/App.scss'

class App extends Component {
  constructor(){
    super();
    this.storedata = this.storedata.bind(this)
  }

  storedata(data){
    this.props.dispatch({
      type:'ADD_NAVLIST',
      payload:data
    })
  }

  componentWillMount(){
      axios.get('http://www.chowtaiseng.com/ishop/web/?app_act=api/&method=item.list.category&params={%22platform_type%22:6,%22platform_category_code%22:%22A001%22,%22isindex%22:true}&sid=2jm0sfbmvb3fcrdfg9hfkik1u5&sign=caccd2ca9b40124928bad146478c4a3b')
      .then(res=>{
        this.props.storedata(res);
      })
  }

  render() {
    console.log('app')
    return (
      <div className="App" >
        <Switch>
          <Route path="/mall" component={Mall}/>
          <Route path="/found" component={Found}/>
          <Route path="/custom" component={Custom}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/mine" component={Mine}/>
          <Route path="/search" component={Search}/>
          <Redirect from="/" to="/mall"/>
        </Switch>

        
      </div>
    );
  }
}


let mapStateToProps = (state)=>{
    return {
      ...state
    }
}

let mapDispatchToProps = (dispatch,ownProps)=>{
  return {
    storedata(data){
          dispatch(add(data))
      }
  }
}

// 利用withRouter高阶组件包装App组件
App = connect(mapStateToProps,mapDispatchToProps)(App)
//withRouter一定要放到最后面
export default withRouter(App); 
