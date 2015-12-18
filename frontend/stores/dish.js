var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var DishStore = new Store(AppDispatcher);
var DishConstants = require('../constants/dish_constants');

var _dishes = {};

DishStore.all = function () {
  var dishes = [];
  for (var id in _dishes) {
    dishes.push(_dishes[id]);
  }
  return dishes;
}

DishStore.find = function (id) {
  return _dishes[id];
}

var resetDishes = function (dishes) {
  _dishes = {};
  dishes.forEach(function (dish) {
    _dishes[dish.id] = dish;
  })
  DishStore.__emitChange();
}

var resetDish = function (dish) {
  _dishes[dish.id] = dish;
  DishStore.__emitChange();
}

var removeDish = function (dish) {
  delete _dishes[dish.id];
  DishStore.__emitChange();
}

DishStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case DishConstants.DISHES_RECEIVED:
      resetDishes(payload.dishes);
      break;
    case DishConstants.DISH_RECEIVED:
      resetDish(payload.dish);
      break;
    case DishConstants.REMOVE_DISH:
      removeDish(payload.dish);
      break;
  }
}

module.exports = DishStore;
