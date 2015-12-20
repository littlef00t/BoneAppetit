var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchDishes: function () {
    $.ajax({
      url: "api/dishes",
      success: function (dishes) {
        ApiActions.receiveAllDishes(dishes);
      }
    })
  },
  fetchDish: function (id) {
    $.ajax({
      url: "api/dishes/" + id,
      success: function (dish) {
        ApiActions.receiveOneDish(dish);
      }
    })
  },
  createDish: function (dish, callback) {
    $.ajax({
      url: "api/dishes",
      type: "POST",
      data: {dish: dish},
      success: function (dish) {
        ApiActions.receiveOneDish(dish);
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
  },
  createComment: function (comment, callback) {
    $.ajax({
      url: "api/comments",
      type: "POST",
      data: { comment: comment },
      success: function (comment) {
        ApiActions.receiveOneComment(comment);
        callback && callback(comment.dish_id);
      }
    })
  }
}

module.exports = ApiUtil;
