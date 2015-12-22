var React = require('react');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');

var CommentForm = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function () {
    return {
      body: '',
      dish_id: this.props.dish.id
    };
  },
  createComment: function (e) {
    e.preventDefault();
    var comment = this.state;
    ApiUtil.createComment(comment, function (id) {
      this.history.pushState(null, "dishes/" + id, {});
    }.bind(this));
    this.setState({
      body: '',
      dish_id: this.props.dish.id
    })
  },

  render: function () {
    return (
      <form onSubmit={this.createComment}>
        <div>
          <label htmlFor='comment_body'>Love note</label>
          <input type='text'
            id='comment_body'
            valueLink={this.linkState('body')}
            />
        </div>

        <button className="btn btn-warning">Add Love Note</button>
        <br />
      </form>
    );
  }
})
module.exports = CommentForm;
