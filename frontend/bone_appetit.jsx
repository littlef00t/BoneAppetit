var React = require('react');
var ReactDOM = require('react-dom');

var Index = require('./components/index');

var Router = require('react-router').Router;
var Route = require('react-router').Route;

var App = require('./components/app');

var routes = (
  <Route path="/" component={App}></Route>
);



// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<Index/>, document.getElementById('root')
// );
// });

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root')
);
});
