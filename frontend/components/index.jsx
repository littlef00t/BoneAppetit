var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function () {
    return { dishes: DishStore.all() };
  },
  _onChange: function () {
    this.setState({ dishes: DishStore.all() });
  },
  componentDidMount: function () {
    this.dishListener = DishStore.addListener(this._onChange);
    ApiUtil.fetchDishes();

  },
  componentWillUnmount: function () {
    this.dishListener.remove();
  },
  render: function () {
    return (
      <ul>
        {
          this.state.dishes.map(function (dish, idx) {
            return <li key={idx}>{dish.name}</li>
          })
        }
      </ul>
    )
  }
})

module.exports = Index;
