var React = require('react');
var History = require('react-router').History;


var IndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/dishes/' + this.props.dish.id, {})
  },

  render: function () {
    var dish = this.props.dish;
    return (
      <li onClick={this.showDetail}>
        <p>Dish: {dish.name}</p>
        <p>Description: {dish.description}</p>
      </li>
    );
  }
})

module.exports = IndexItem;
