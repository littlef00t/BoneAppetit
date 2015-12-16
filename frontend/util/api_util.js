var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchDishes: function () {
    $.ajax({
      url: "api/dishes",
      success: function (dishes) {
        ApiActions.recieveAll(dishes);
      }
    })
  }
}

module.exports = ApiUtil;
