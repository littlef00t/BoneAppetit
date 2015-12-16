var React = require('react');
var ReactDOM = require('react-dom');

var Dish = React.createClass({
  render: function () {
    return (<div>I am a dish</div>);
  }

});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Dish/>, document.getElementById('root')
);
});
