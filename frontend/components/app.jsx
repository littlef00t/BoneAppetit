var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1 id="org">Hungry Heart</h1>
        <p id="quote">"Pure love is a willingness to give without a thought of receiving anything in return." -- Peace Pilgrim</p>
        {this.props.children}
      </div>
    )
  }
});
module.exports = App;
