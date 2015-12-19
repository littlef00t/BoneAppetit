var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');

var IndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, 'dishes/' + this.props.dish.id, {})
  },
  handleDelete: function (e) {
    e.preventDefault();
    ApiUtil.deleteDish(this.props.dish.id);
  },
  render: function () {
    var dish = this.props.dish;
    return (
      <li>
        <p onClick={this.showDetail}>Dish: {dish.name}</p>
        <ul>
          {dish.images.map(function (image) {
                return (
                  <div key={image.id}>
                    <img src={"http://res.cloudinary.com/littlef00t/image/upload/w_200,h_200/" + image.url + "png"}/>
                  </div>
                );
              }
            )
          }
        </ul>
        <input type="button" dish={dish} onClick={this.handleDelete} value="Delete"/>
      </li>
    );
  }
})

module.exports = IndexItem;
