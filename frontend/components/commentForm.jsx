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
      <div className="row container">
        <form className="col s12" onSubmit={this.createComment}>
          <div className="input-field">
            <i className="material-icons prefix">comment</i>
            <input type='text'
              id='comment-body'
              valueLink={this.linkState('body')}
              />
            <label htmlFor='comment-body' className="active">Share some love</label>
          </div>
          <br></br>
          <button className="btn waves-effect waves-light">Add Love Note</button>
          <br />
        </form>
      </div>
    );
  }
})
module.exports = CommentForm;
