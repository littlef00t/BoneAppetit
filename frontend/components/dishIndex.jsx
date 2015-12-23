var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');
var DishIndexItem = require('./DishIndexItem');
var DishForm = require('./dishForm');
var CurrentUserStore = require('../stores/current_user');
var AutoComplete = require('./AutoComplete');




var DishIndex = React.createClass({
  getInitialState: function () {
    return { dishes: DishStore.all(),
              current_user: CurrentUserStore.find()
     };
  },
  _onChange: function () {
    this.setState({ dishes: DishStore.all(),
                    current_user: CurrentUserStore.find()
    });
  },
  componentDidMount: function () {
    this.dishListener = DishStore.addListener(this._onChange);
    ApiUtil.fetchDishes();
    this.currentuserListener = CurrentUserStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
  },
  componentWillUnmount: function () {
    this.dishListener.remove();
    this.currentuserListener.remove();
  },
  render: function () {
    var current_user = this.state.current_user;
    var dishForm;
    if (current_user.id !== -1) {
      dishForm = <DishForm />
    } else {
      dishForm = <div></div>
    }


    return (
      <div>
        <h2>Dishes offered:</h2>
        <AutoComplete dishes={this.state.dishes} />
        {dishForm}
      </div>
    );
  }
})

module.exports = DishIndex;
