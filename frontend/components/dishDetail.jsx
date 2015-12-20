var React = require('react');
var DishStore = require('../stores/dish');
var ApiUtil = require('../util/api_util');
var ReactRouter = require('react-router');
var CommentForm = require('./commentForm');
var CommentIndexItem = require('./CommentIndexItem');

var DishDetail = React.createClass({
  getStateFromStore: function () {
    return { dish: DishStore.find(parseInt(this.props.params.dishId)) };
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchDish(parseInt(newProps.params.dishId));
    this._onChange();
  },
  componentDidMount: function () {
    this.dishListener = DishStore.addListener(this._onChange);
    ApiUtil.fetchDish(parseInt(this.props.params.dishId));
  },
  componentWillUnmount: function () {
    this.dishListener.remove();
  },
  render: function () {
    var Link = ReactRouter.Link;
    var dish = this.state.dish;
    return (
      <div>
        <h4>Dish: {dish.name}</h4>
        <p>Description: {dish.description}</p>
        <div>
          {
            dish.images.map(function (image) {
            return (
              <img src={"http://res.cloudinary.com/littlef00t/image/upload/w_200,h_200/" + image.url + ".png"}/>
              )
            })
          }
        </div>
        <CommentForm dish={dish}/>
        <label>Some Love</label>
        <ul>
          {
            dish.comments.map(function (comment) {
              return (
                  <CommentIndexItem comment={comment}/>
              )
            })
          }
        </ul>
        <Link to="/" > Back to Dishes Index </Link>
      </div>
    );
  }
});

module.exports = DishDetail;
