var React = require('react');
var ApiUtil = require('../util/api_util');
var CurrentUserStore = require('../stores/current_user');


var App = React.createClass({
  getInitialState: function () {
    return { current_user: CurrentUserStore.find() };
  },
  _onChange: function () {
    this.setState({ current_user: CurrentUserStore.find()});
  },
  componentDidMount: function () {
    this.currentuserListener = CurrentUserStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
  },
  componentWillUnmount: function () {
    this.currentuserListener.remove();
  },
  render: function () {
    var current_user = this.state.current_user;
    var currentUser;
    if (current_user.id === -1) {
      currentUser = (
        <ul id="nav-mobile" className="right">
          <li><a href="session/new">Sign In</a></li>
          <li><a href="users/new">Sign Up</a></li>
        </ul>
      )
    } else {
      <div></div>
    }
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo left">Hungry Heart</a>
              {currentUser}
            </div>
          </nav>
        </div>
        <div className="everything-but-nav">
          <div className="center-align">
            <img className="responsive-img logo" src={"https://res.cloudinary.com/littlef00t/image/upload/w_300,h_150/lz3cctkmjh5dvaxwalol.png"} />
            <h5>A place to share excess food to the hungry...</h5>
            <p id="quote">"Pure love is a willingness to give without a thought of receiving anything in return." -- Peace Pilgrim</p>
          </div>
          <div currentUser={current_user}>{this.props.children}</div>
        </div>
      </div>
    )
  }
});
module.exports = App;
