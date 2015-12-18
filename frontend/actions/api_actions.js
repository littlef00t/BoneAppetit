var AppDispatcher = require('../dispatcher/dispatcher');
var DishConstants = require('../constants/dish_constants');


var ApiActions = {
  receiveAll: function (dishes) {
    AppDispatcher.dispatch({
      actionType: DishConstants.DISHES_RECEIVED,
      dishes: dishes
    });
  },
  receiveOne: function (dish) {
    AppDispatcher.dispatch({
      actionType: DishConstants.DISH_RECEIVED,
      dish: dish
    });
  },
  deleteDish: function (dish) {
    AppDispatcher.dispatch({
      actionType: DishConstants.REMOVE_DISH,
      dish: dish
    })
  }
}

module.exports = ApiActions;
