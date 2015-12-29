var React = require('react');
var ReactDOM = require('react-dom');

var DishIndex = require('./components/dishIndex');
var DishIndexItem = require('./components/DishIndexItem');
var DishDetail = require('./components/dishDetail');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={DishIndex}/>
    <Route path="dishes" component={DishIndex}/>
    <Route path="dishes/:dishId" component={DishDetail}></Route>
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root')
);
});
