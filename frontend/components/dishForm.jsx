var React = require('react');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');
var UploadButton = require('./UploadButton');

var DishForm = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function () {
    return {
      id: '',
      name: '',
      description: '',
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
    ApiUtil.createDish(dish, function (id) {
      this.history.pushState(null, "dishes/" + id, {});
    }.bind(this));
    this.setState({
      name: '',
      description: '',
      id: '',
      image_publicids: []
    });
  },

  render: function () {
    return (
      <div className="row">
        <p>Share a dish here!</p>
        <form className="col s12" onSubmit={this.createDish}>
          <div className="row input-field col s6">
            <input type='text'
              id='dish_name'
              valueLink={this.linkState('name')}
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
          {
            this.state.image_publicids.map(function (public_id, idx) {
              return <img key={idx} src={"https://res.cloudinary.com/littlef00t/image/upload/w_200,h_200/" + public_id + ".png"}/>
            })
          }
          <UploadButton addImage={this.addImage}/>
          <br></br>

          <button className="btn-large waves-effect waves-light">Add Dish</button>
          <br />
        </form>
      </div>
    );
  }
})
module.exports = DishForm;
