var React = require('react');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');
var Cloud = require('./Cloud');
var UploadButton = require('./UploadButton');

var DishForm = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function () {
    return {
      id: '',
      name: '',
      description: '',
      image_urls: []
    };
  },
  addImage: function (image) {
    var image_urls = this.state.image_urls;
    image_urls.push(image)
    this.setState({image_urls: image_urls});
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
      image_urls: []
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
          this.state.image_urls.map(function (url) {
            return <img src={url}/>
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
