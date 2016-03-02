var React = require('react');
var ApiUtil = require('../util/api_util');
var CurrentUserStore = require('../stores/current_user');

var Scroll  = require('react-scroll');

var Link    = Scroll.Link;
var Element = Scroll.Element;
var Events  = Scroll.Events;

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
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
  },
  componentWillUnmount: function () {
    this.currentuserListener.remove();
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  signOut: function () {
    ApiUtil.signOutUser();
  },
  render: function () {
    var current_user = this.state.current_user;
    var currentUser;
    if (current_user.id === -1) {
      currentUser = (
        <ul id="nav-mobile" className="right">
          <li><Link activeClass="active" className="dishsearch-anchor" to="dishsearch-anchor" spy={true} smooth={true} duration={500}>Search for a Dish</Link></li>
          <li><a href="session/new">Sign In</a></li>
          <li><a href="users/new">Sign Up</a></li>
        </ul>
      )
    } else {
      currentUser = (
        <ul id="nav-mobile" className="right">
          <li><Link activeClass="active" className="dishform-anchor" to="dishform-anchor" spy={true} smooth={true} duration={500} >Share a Dish</Link></li>
          <li><Link activeClass="active" className="dishsearch-anchor" to="dishsearch-anchor" spy={true} smooth={true} duration={500}>Search for a Dish</Link></li>
          <li><a onClick={this.signOut}>Sign Out</a></li>
        </ul>
      )
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
        <div className="parallax-container beg">
          <div className="parallax"></div>
        </div>


        <div>
          <div className="center-align header">
            <img className="responsive-img logo" src={"https://res.cloudinary.com/littlef00t/image/upload/w_300,h_150/ledyr29e6h1xqz9ozkiy.png"} />
            <h6>SHARE EXCESS FOOD&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;FIND FREE FOOD&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;MAKE A DIFFERENCE</h6>
            <br/>
            <br/>
            <p id="quote">"Pure love is a willingness to give without a thought of receiving anything in return." -- Peace Pilgrim</p>
          </div>
          <div className="parallax-container">
            <div className="parallax"></div>
          </div>
          <div className="everything-but-nav">{this.props.children}</div>
        </div>
      </div>
    )
  }
});
module.exports = App;
