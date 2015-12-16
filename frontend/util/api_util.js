var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchDishes: function () {
    $.ajax({
      url: "api/dishes",
      success: function (dishes) {
        ApiActions.receiveAll(dishes);
      }
    })
  },
  fetchDish: function (id) {
    $.ajax({
      url: "api/dishes" + id,
      success: function (dish) {
        ApiActions.receiveOne(dish);
      }
    })
  }
}

module.exports = ApiUtil;
