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
  fetchCurrentUser: function () {
    console.log('got in ajax');
    $.ajax({
      url: "session",
      success: function (current_user) {
        console.log("success " + current_user.username);
        ApiActions.receiveCurrentUser(current_user);
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
      },
      error: function () {
        window.location = "session/new";
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
      },
      error: function () {
        window.location = "session/new";
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
      },
      error: function () {
        window.location = "session/new";
      }
    })
  },
  deleteComment: function (id, callback) {
    $.ajax({
      url: "api/comments/" + id,
      type: "DELETE",
      success: function (comment) {
        ApiActions.deleteComment(comment);
        callback && callback(comment.dish_id);
      },
      error: function () {
        window.location = "session/new";
      }
    })
  }
}

module.exports = ApiUtil;
