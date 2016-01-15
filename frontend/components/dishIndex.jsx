var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');
var DishIndexItem = require('./DishIndexItem');
var DishForm = require('./dishForm');
var CurrentUserStore = require('../stores/current_user');
var AutoComplete = require('./autocomplete');

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
    var greetings = [
      "You look lovely today,",
      "Nice to have you here,",
      "Your smile is contagious,",
      "You're a smart cookie,",
      "You are appreciated,",
      "You are enough,",
      "You should be proud of yourself,",
      "You've got all the right moves,",
      "I bet you sweat glitter,",
      "You are inspiring,",
      "You are a great example to others,",
      "You are like a breath of fresh air,",
      "You are loved,",
      "You are someone's reason to smile,",
      "You are a gift to those around you,",
      "You're truly special,"
    ];
    var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    var current_user = this.state.current_user;
    var greeting;
    if (current_user.id !== -1) {
      greeting = <h3 id="greeting" className="center-align">{randomGreeting} {current_user.username}!</h3>
    } else {
      greeting = <h3 id="greeting" className="center-align">{randomGreeting} guest!</h3>
    }
    var dishForm;
    if (current_user.id !== -1) {
      dishForm = <DishForm />
    } else {
      dishForm = <div></div>
    }


    return (
      <div className="padding-top">
        {dishForm}
        <h3 className="center-align padding-top"><strong>Dishes Offered</strong></h3>
        <AutoComplete currentUser={this.state.current_user} dishes={this.state.dishes} />
      </div>
    );
  }
})

module.exports = DishIndex;
