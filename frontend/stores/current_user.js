var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var CurrentUserStore = new Store(AppDispatcher);

var current_user = {id: -1};

CurrentUserStore.find = function () {
  return current_user;
}

CurrentUserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "CURRENTUSER_RECEIVED":
      current_user = payload.current_user;
      CurrentUserStore.__emitChange();
      break;
  }
}

module.exports = CurrentUserStore;
