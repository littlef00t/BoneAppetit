var React = require('react');

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, results) {
      if(!error) {
        var image = results[0];
        this.props.addImage(image.public_id);
      }
    }.bind(this));

  },

  render: function () {
    return (
      <div>
        <button className="btn btn-minor waves-effect waves-light" onClick={this.upload}>Upload dish image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
