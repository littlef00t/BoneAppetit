var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');
var ReactRouter = require('react-router');

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
    this._onChange();
  },
  componentDidMount: function () {
    this.dishListener = DishStore.addListener(this._onChange);
    ApiUtil.fetchDish(parseInt(this.props.params.dishId));
  },
  componentWillUnmount: function () {
    this.dishListener.remove();
  },
  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div>
        <h4>Dish: {this.state.dish.name}</h4>
        <p>Description: {this.state.dish.description}</p>
        <Link to="/" > Back to Dishes Index </Link>
      </div>
    );
  }
});

module.exports = DishDetail;
