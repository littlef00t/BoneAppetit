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
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <ul>
            {dish.images.map(function (image) {
                  return (
                    <div key={image.id}>
                      <img className="activator responsive-img" src={"https://res.cloudinary.com/littlef00t/image/upload/w_100,h_100/" + image.url + ".png"}/>
                    </div>
                  );
                }
              )
            }
          </ul>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{dish.name}<i className="material-icons right">more_vert</i></span>
          <p id="comment-click" onClick={this.showDetail}>View or add comments</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
          <p>{dish.description}</p>
        </div>
      </div>


    );
  }
})

module.exports = DishIndexItem;
