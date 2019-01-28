import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './sass/App.css';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import Cart from './components/Cart';
import Mall from './components/Mall';
import Custom from './components/Custom';
import Found from './components/Found';
import Mine from './components/Mine';
import Search from './components/search'
import axios from 'axios';
import { connect } from 'react-redux';
// import Search from './components/Mall/Search';

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

  componentDidUpdate(){
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


        <TabBar
        unselectedTintColor="#949494"
        tintColor="#ddc17f"
        barTintColor="white"
        noRenderContent="true"
        >
          {
            this.state.menu.map(menu=>{
              return (
                <TabBar.Item
                  title={menu.name}
                  key={menu.name}
                  icon={
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={menu.icon}></use>
                    </svg>
                  }
                  selectedIcon={
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={menu.icon}></use>
                    </svg>
                  }
                  selected={this.state.selectedTab === menu.name}
                  onPress={()=>{
                    this.setState({
                      selectedTab:menu.name,
                    });
                    this.props.history.push(menu.name)                   
                  }  
                  }
                  >
                  
                </TabBar.Item>
              )
            })
          }
        </TabBar>

        
      </div>
    );
  }
}


let mapStateToProps = (state)=>{
    console.log(state)
    return {
      ...state
    }
}
// 利用withRouter高阶组件包装App组件
App = withRouter(App);
App = connect(mapStateToProps)(App)

export default App;
