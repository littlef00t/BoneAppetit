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
      url: "api/dishes/" + id,
      success: function (dish) {
        ApiActions.receiveOne(dish);
      }
    })
  },
  createDish: function (dish, callback) {
    $.ajax({
      url: "api/dishes",
      type: "POST",
      data: {dish: dish},
      success: function (dish) {
        ApiActions.receiveOne(dish);
        callback && callback(dish.id);
      }
    })
  },
  deleteDish: function (id, callback) {
    $.ajax({
      url: "api/dishes/" + id,
      type: "DELETE",
      success: function (dish) {
        ApiActions.deleteDish(dish);
        callback && callback();
      }
    })
  }
}

module.exports = ApiUtil;
