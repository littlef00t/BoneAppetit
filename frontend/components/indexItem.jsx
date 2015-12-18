var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');

var IndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, 'dishes/' + this.props.dish.id, {})
  },
  handleDelete: function () {
    ApiUtil.deleteDish(this.props.dish.id, function () {
      this.history.pushState(null, '/')
    });
  },
  render: function () {
    var dish = this.props.dish;
    return (
      <li onClick={this.showDetail}>
        <p>Dish: {dish.name}</p>
        <input type="button" dish={dish} onClick={this.handleDelete} value="Delete"/>
      </li>
    );
  }
})

module.exports = IndexItem;
