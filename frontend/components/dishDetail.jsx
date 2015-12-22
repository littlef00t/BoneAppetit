var React = require('react');
var DishStore = require('../stores/dish');
var CurrentUserStore = require('../stores/current_user');
var ApiUtil = require('../util/api_util');
var ReactRouter = require('react-router');
var CommentForm = require('./commentForm');
var CommentIndexItem = require('./CommentIndexItem');
var History = require('react-router').History;

var DishDetail = React.createClass({
  mixins: [History],

  getStateFromStore: function () {
    return { dish: DishStore.find(parseInt(this.props.params.dishId)),
              current_user: CurrentUserStore.find()
     };
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
    this.currentuserListener = CurrentUserStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
    this.dishListener = DishStore.addListener(this._onChange);
    ApiUtil.fetchDish(parseInt(this.props.params.dishId));
  },
  componentWillUnmount: function () {
    this.dishListener.remove();
    this.currentuserListener.remove();
  },
  handleDelete: function (e) {
    e.preventDefault();
    ApiUtil.deleteDish(this.state.dish.id, function () {
      this.history.pushState(null, "dishes", {})
    }.bind(this));
  },
  render: function () {
    var Link = ReactRouter.Link;
    var dish = this.state.dish;
    var current_user = this.state.current_user;

    var username;
    var commentForm;
    if (current_user) {
      username = <h3>Hi! {current_user.username}</h3>;
      commentForm = <CommentForm dish={dish}/>
    } else {
      username = <h3>Hi guest!</h3>;
      commentForm = <div></div>
    }

    if (!this.state.dish) {
      return (<div>Loading...</div>)
    }

    var deleteButton;
    if (current_user && current_user.id === this.state.dish.user_id) {
      deleteButton = <input type="button" dish={dish} onClick={this.handleDelete} value="Delete Dish"/>

    } else {
      deleteButton = <div></div>
    }


    return (
      <div>
        {username}
        <h4>Dish: {dish.name}</h4>
        <p>Description: {dish.description}
          <br/>
          <small>posted by {dish.username}</small>
        </p>
        <div>
          {
            dish.images.map(function (image) {
            return (
              <img key={image.id} src={"http://res.cloudinary.com/littlef00t/image/upload/w_300,h_300/" + image.url + ".png"}/>
              )
            })
          }
          {deleteButton}
        </div>
        <br/>
        {commentForm}
        <br/>
        <label>Some Love</label>
        <ul>
          {
            dish.comments.map(function (comment) {
              return (
                  <CommentIndexItem key={comment.id}
                    comment={comment} currentuser={current_user}/>
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
