var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');

var DishIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, 'dishes/' + this.props.dish.id, {})
  },
  render: function () {
    var dish = this.props.dish;
    return (
      <li className="dish-index-item">
        <div className="dish-details" onClick={this.showDetail}>
          <p>Dish: {dish.name}
            <br/>
            <small> posted by {dish.username}</small>
          </p>
          <ul>
            {dish.images.map(function (image) {
                  return (
                    <div key={image.id}>
                      <img src={"http://res.cloudinary.com/littlef00t/image/upload/w_200,h_200/" + image.url + ".png"}/>
                    </div>
                  );
                }
              )
            }
          </ul>
        </div>
      </li>
    );
  }
})

module.exports = DishIndexItem;
