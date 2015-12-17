var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');

var DishDetail = React.createClass({
  getStateFromStore: function () {
    return { dish: DishStore.find(parseInt(this.props.params.dishId)) };
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchDish(parseInt(newProps.params.dishId));
  },
  componentDidMount: function () {
    this.dishListener = DishStore.addListener(this._onChange);
    ApiUtil.fetchDish(parseInt(this.props.params.dishId));
  },
  componentWillUnmount: function () {
    this.dishListener.remove();
  },
  render: function () {
    return (
      <div>
        <h4>Dish: {this.state.dish.name}</h4>
        <p>Description: {this.state.dish.description}</p>
      </div>
    );
  }
});

module.exports = DishDetail;
