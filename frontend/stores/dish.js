var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var DishStore = new Store(AppDispatcher);
var DishConstants = require('../constants/dish_constants');

var _dishes = [];

DishStore.all = function () {
  return _dishes.slice(0);
}

var resetDishes = function (dishes) {
  _dishes = dishes;
}

DishStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case DishConstants.DISHES_RECEIVED:
      resetDishes(payload.dishes);
      DishStore.__emitChange();
      break;
  }
}

module.exports = DishStore;
