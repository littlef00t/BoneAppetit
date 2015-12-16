var React = require('react');
var DishIndex = require('./index');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <DishIndex />
      </div>
    )
  }
});
module.exports = App;
