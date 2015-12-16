var React = require('react');
var DishIndex = require('./index');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Bone Appetit</h1>
        <DishIndex />
        {this.props.children}
      </div>
    )
  }
});
module.exports = App;
