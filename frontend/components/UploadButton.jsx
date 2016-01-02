var React = require('react');

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, results) {
      if(!error) {
        var image = results[0];
        //here we probably want to include public id at some point
        //for now we will just use url
        //we will eventually probably store public id instead of url
        // debugger below was addImage(image.url)
        this.props.addImage(image.public_id);
      }
    }.bind(this));

  },

  render: function () {
    return (
      <div>
        <button className="btn btn-minor" onClick={this.upload}>Upload dish image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
