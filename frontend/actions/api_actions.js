var AppDispatcher = require('../dispatcher/dispatcher');
var DishConstants = require('../constants/dish_constants');


var ApiActions = {
  recieveAll: function (dishes) {
    AppDispatcher.dispatch({
      ActionType: DishConstants.DISHES_RECEIVED,
      dishes: dishes
    });
  }
}

module.exports = ApiActions;
