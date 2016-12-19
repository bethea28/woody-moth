import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import Header from './components/Header';
import LookBookPage from './components/LookBookPage';
import SalePage from './components/SalePage';
import ShopPage from './components/ShopPage';
import ToolBar from './components/ToolBar';
import HomePage from './components/HomePage';
import ItemPage from './components/ItemPage';


var App = React.createClass({

  render: function() {
    return (
      <div>

      <nav className="navbar navbar-default">
        <Header />
      </nav>

      <div className="container-fluid">
        {this.props.children}
      </div>

      <Footer />
    </div>
    )
  }
})

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="look" component={LookBookPage} />
        <Route path="brand" component={BrandStory} />
        <Route path="sale" component={SalePage} />
        <Route path="/shop/:object/:objectname" component={ItemPage}/>
        <Route path="shop" component={ShopPage} />
        <Route path="home" component={HomePage} />
      </Route>
    </Router>,
  document.getElementById('root')
);

export default App;