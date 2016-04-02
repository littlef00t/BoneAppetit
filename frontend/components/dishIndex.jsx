var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');
var DishIndexItem = require('./DishIndexItem');
var DishForm = require('./dishForm');
var CurrentUserStore = require('../stores/current_user');
var AutoComplete = require('./autocomplete');

var Scroll    = require('react-scroll');
var Element = Scroll.Element;

var DishIndex = React.createClass({
  getInitialState: function () {
    return { dishes: DishStore.all()
              // current_user: this.props.current_user
     };
  },

  _onChange: function () {
    this.setState({ dishes: DishStore.all()
              // current_user: this.props.current_user
              // current_user: CurrentUserStore.find()
    });
  },

  componentDidMount: function () {
    this.dishListener = DishStore.addListener(this._onChange);
    ApiUtil.fetchDishes();
    // console.log(this.props.current_user);
    // this.currentuserListener = CurrentUserStore.addListener(this._onChange);
    // ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.dishListener.remove();
    // this.currentuserListener.remove();
  },



  render: function () {
    var current_user = this.props.current_user;

    var dishForm;
    if (current_user.id !== -1) {
      dishForm = <DishForm />
    } else {
      dishForm = <div></div>
    }

    return (
      <div className="padding-top">
        <div>{dishForm}</div>
        <Element name="dishsearch-anchor" className="element"></Element>
        <br></br>
        <h3 className="center-align padding-top"><strong>Dishes Offered</strong></h3>
        <AutoComplete currentUser={this.props.current_user} dishes={this.state.dishes} />
      </div>
    );
  }
})

module.exports = DishIndex;
