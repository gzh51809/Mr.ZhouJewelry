import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import Cart from './page/Cart';
import Mall from './page/Mall';
import Custom from './page/Custom';
import Found from './page/Found';
import Mine from './page/Mine';
import Search from './page/search'
import axios from 'axios';
import { connect } from 'react-redux';
import {add} from './actions/mallAction';
import './sass/App.scss'

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu:[
        {
          text:'商城',
          path:'/mall',
          name:'Mall',
          icon:'#icon-jiezhi'
        },{
          text:'发现',
          path:'/found',
          name:'Found',
          icon:'#icon-faxian'
        },{
          text:'定制',
          path:'/custom',
          name:'Custom',
          icon:'#icon-zuanshi'
        },{
          text:'购物车',
          path:'/cart',
          name:'Cart',
          icon:'#icon-icon01'
        },{
          text:'个人',
          path:'/mine',
          name:'Mine',
          icon:'#icon-geren'
        },
      ],     
      selectedTab:'Mall'
      
    }
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
App = withRouter(App);
App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App;
