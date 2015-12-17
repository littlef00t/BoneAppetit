var React = require('react');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');

var DishForm = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function () {
    return {
      name: '',
      description: ''
    };
  },
  createDish: function (e) {
    e.preventDefault();
    var dish = this.state;
    ApiUtil.createDish(dish, function (id) {
      this.history.pushState(null, "/dish/" + id, {});
    }.bind(this));
    this.setState({
      name: '',
      description: ''
    });
  },

  render: function () {
    return (
      <form onSubmit={this.createDish}>
        <div>
          <label htmlFor='dish_name'>Dish</label>
          <input type='text'
            id='dish_name'
            valueLink={this.linkState('name')}
            />
        </div>

        <div>
          <label htmlFor='dish_description'>Description</label>
          <input type='text'
            id='dish_description'
            valueLink={this.linkState('description')}
            />
        </div>

        <button>Add Dish</button>
        <br />
      </form>
    );
  }
})
module.exports = DishForm;
