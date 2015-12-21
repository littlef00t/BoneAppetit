var AppDispatcher = require('../dispatcher/dispatcher');
var DishConstants = require('../constants/dish_constants');
var CommentConstants = require('../constants/comment_constants')


var ApiActions = {
  receiveAllDishes: function (dishes) {
    AppDispatcher.dispatch({
      actionType: DishConstants.DISHES_RECEIVED,
      dishes: dishes
    });
  },
  receiveOneDish: function (dish) {
    AppDispatcher.dispatch({
      actionType: DishConstants.DISH_RECEIVED,
      dish: dish
    });
  },
  deleteDish: function (dish) {
    debugger;
    AppDispatcher.dispatch({
      actionType: DishConstants.REMOVE_DISH,
      dish: dish
    })
  },
  receiveCurrentUser: function (current_user) {
    console.log('apiactions ' + current_user.username );
    AppDispatcher.dispatch({
      actionType: "CURRENTUSER_RECEIVED",
      current_user: current_user
    })
  },
  receiveOneComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    })
  },
  deleteComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.REMOVE_COMMENT,
      comment: comment
    })
  }
}

module.exports = ApiActions;
