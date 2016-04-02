var React = require('react');
var ApiUtil = require('../util/api_util');
var DishIndexItem = require('./DishIndexItem');
var DishStore = require('../stores/dish');

var CurrentuserDishes = React.createClass({
  getInitialState: function(){
    return { dishes: DishStore.findDishes(this.props.current_user.id)
    };
  },
  componentDidMount: function(){
    console.log(this.props.current_user);
  },
  showDetail: function () {
    scrollTo(0, 1000);
    this.history.pushState(null, 'dishes/' + this.props.dish.id, {})
  },
  render: function(){
    var dishes = this.state.dishes;
    var myDishes;
    var pickupDetails = <p onClick={this.showDetail}>View PickUp Details</p>
      if (dishes.length === 0) {
        myDishes = <div>You have not shared any dishes.</div>
      } else {
        myDishes = (
          <ul className="matched-items">
            {
              dishes.map(function (dish, idx) {
                return (
                  <li key={idx}>
                    <DishIndexItem dish={dish}/>
                  </li>
                )
              })
            }
          </ul>
        )
      }

    return(
      <div className="padding-bottom padding-sides">
        <h3 className="center-align">My Dishes</h3>
        <div>
          {myDishes}
        </div>
      </div>
    );
  }
});

module.exports = CurrentuserDishes;
