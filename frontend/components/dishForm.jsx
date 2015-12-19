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
      <form onSubmit={this.createDish}>
        <div>
          <label htmlFor='dish_name'>Dish</label>
          <input type='text'
            id='dish_name'
            valueLink={this.linkState('name')}
            />
        </div>

        <div>
          <label htmlFor='dish_description'>Description</label>
          <input type='text'
            id='dish_description'
            valueLink={this.linkState('description')}
            />
        </div>
        {
          this.state.image_publicids.map(function (public_id) {
            return <img src={"http://res.cloudinary.com/littlef00t/image/upload/w_200,h_200/" + public_id + ".png"}/>
          })
        }
        <UploadButton addImage={this.addImage}/>

        <button>Add Dish</button>
        <br />
      </form>
    );
  }
})
module.exports = DishForm;
