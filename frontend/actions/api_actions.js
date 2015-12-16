var AppDispatcher = require('../dispatcher/dispatcher');
var DishConstants = require('../constants/dish_constants');


var ApiActions = {
  receiveAll: function (dishes) {
    // debugger;
    AppDispatcher.dispatch({
      actionType: DishConstants.DISHES_RECEIVED,
      dishes: dishes
    });
  }
}

module.exports = ApiActions;
