var React = require('react');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');
var UploadButton = require('./UploadButton');

var Scroll    = require('react-scroll');
var Element = Scroll.Element;

var DishForm = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function () {
    return {
      id: '',
      name: '',
      description: '',
      location: '',
      pickup_time: '',
      image_publicids: []
    };
  },
  addImage: function (image_publicid) {
    var image_publicids = this.state.image_publicids;
    image_publicids.push(image_publicid)
    this.setState({image_publicids: image_publicids});
  },
  createDish: function (e) {
    e.preventDefault();
    var dish = this.state;
    scrollTo(0, 1000);
    ApiUtil.createDish(dish, function (id) {
      this.history.pushState(null, "dishes/" + id, {});
    }.bind(this));
    this.setState({
      name: '',
      description: '',
      location: '',
      pickup_time: '',
      id: '',
      image_publicids: []
    });
  },

  render: function () {
    return (
      <div>
        <Element name="dishform-anchor" className="element"></Element>
        <br/>
        <br/>
        <div className="center-align row padding-top padding-bottom padding-sides">
          <h3><strong>Share your dish here!</strong></h3>
          <p className="purple-color">*All fields required including dish image</p>
          <br/>
          <br/>
          <form className="col s12" onSubmit={this.createDish}>
            <div className="row input-field col s6">
              <input type='text'
                id='dish_name'
                valueLink={this.linkState('name')}
                placeholder="Describe your dish in 1-2 words"
                />
              <label className="active" htmlFor='dish_name'>Dish</label>
            </div>

            <div className="row input-field col s6">
              <input type='text'
                id='dish_description'
                valueLink={this.linkState('description')}
                />
              <label className="active" htmlFor='dish_description'>Description</label>
            </div>

            <div className="row input-field col s6">
              <input type='text'
                id='dish_location'
                valueLink={this.linkState('location')}
                placeholder="Where can someone pick up this dish"
                />
              <label className="active" htmlFor='dish_location'>Pick Up Location</label>
            </div>

            <div className="row input-field col s6">
              <input type='text'
                id='dish_pickup_time'
                valueLink={this.linkState('pickup_time')}
                placeholder="What day and time can someone pick up this dish"
                />
              <label className="active" htmlFor='dish_pickup_time'>Pick Up Time</label>
            </div>

            {
              this.state.image_publicids.map(function (public_id, idx) {
                return <img key={idx} src={"https://res.cloudinary.com/littlef00t/image/upload/w_300,h_300/" + public_id + ".png"}/>
              })
            }
            <UploadButton addImage={this.addImage}/>
            <br/>
            <br/>

            <button className="btn-large waves-effect waves-light">Add Dish</button>
            <br />
          </form>
        </div>
        <div className="parallax-container">
          <div className="parallax"></div>
        </div>
      </div>
    );
  }
})
module.exports = DishForm;
