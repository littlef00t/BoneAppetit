var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');
var DishIndexItem = require('./indexItem');

var DishIndex = React.createClass({
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
      <div>
        <ul>
          {
            this.state.dishes.map(function (dish) {
              return <DishIndexItem key={dish.id} dish={dish} />
            })
          }
        </ul>
        <input type="button" value="Sign Up"></input>
        <input type="button" value="Sign In"></input>

      </div>
    );
  }
})

module.exports = DishIndex;
