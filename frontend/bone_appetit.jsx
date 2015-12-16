var React = require('react');
var ReactDOM = require('react-dom');

var Index = require('./components/index');
var IndexItem = require('./components/indexItem');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app');

var routes = (
  <Route path="/" component={App}>
    // <IndexRoute component={Index}/>
    <Route path="dishes/:dishId" component={IndexItem}></Route>
  </Route>
);
// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<Index/>, document.getElementById('root')
// );
// });

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root')
);
});
