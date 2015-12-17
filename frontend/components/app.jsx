var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Bone Appetit</h1>
        {this.props.children}
        <a href="/users/new">Sign Up</a>
        <a href="/session/new">Sign In</a>
      </div>
    )
  }
});
module.exports = App;
