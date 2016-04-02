var React = require('react');
var ApiUtil = require('../util/api_util');
var DishIndexItem = require('./DishIndexItem');

var CurrentuserDishes = React.createClass({
  componentDidMount: function(){
    console.log(this.props.current_user);
  },
  showDetail: function () {
    scrollTo(0, 1000);
    this.history.pushState(null, 'dishes/' + this.props.dish.id, {})
  },
  render: function(){
    var dish;
    var pickupDetails = <p onClick={this.showDetail}>View PickUp Details</p>

    return(
      <div className="card">
        <h3 className="center-align">My Dishes</h3>
        <div className="card-image waves-effect waves-block waves-light">
          <ul>
            {dish.images.map(function (image) {
                  return (
                    <div key={image.id}>
                      <img className="activator responsive-img" src={"https://res.cloudinary.com/littlef00t/image/upload/w_300,h_300/" + image.url + ".png"}/>
                    </div>
                  );
                }
              )
            }
            </ul>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{dish.name}<i className="material-icons right">more_vert</i></span>
          {pickupDetails}
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
          <p>{dish.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = CurrentuserDishes;
