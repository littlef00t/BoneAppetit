var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;

var CommentIndexItem = React.createClass({
  mixins: [History],
  handleDelete: function (e) {
    e.preventDefault();
    ApiUtil.deleteComment(this.props.comment.id, function (dish_id) {
      this.history.pushState(null, "dishes/" + dish_id, {})
    }.bind(this));
  },
  render: function () {
    var comment = this.props.comment;
    var current_user = this.props.currentuser;
    var deleteButton;
    if (current_user && current_user.id === comment.user_id) {
      deleteButton = <input type="button" className="btn btn-minor" comment={comment} onClick={this.handleDelete} value="Delete"/>
    } else {
      deleteButton = <div></div>
    }
    return (
      <div>
        <li key={comment.id}>{comment.body} <br/> <small className="light-purple">Love from: {comment.username}</small></li>
        {deleteButton}
      </div>
    )
  }
})

module.exports = CommentIndexItem;
