var Store = require('react/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var CommentStore = new Store(AppDispatcher);
var CommentConstants = require('../constants/comment_constants');

var _comments = {};

CommentStore.all = function () {
  var comments = [];
  for (var id in _comments) {
    comments.push(_comments[id]);
  }
  return comments;
}

CommentStore.find = function (id) {
  return _comments[id];
}

var resetComments = function (comments) {
  _comments = {};
  comments.forEach(function (comment) {
    _comments[comment.id] = comment;
  })
  CommentStore.__emitChange();
}

var resetComment = function (comment) {
  _comments[comment.id] = comment;
  CommentStore.__emitChange();
}

var removeComment = function (comment) {
  delete _comments[comment.id];
  CommentStore.__emitChange();
}

CommentStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CommentConstants.COMMENT_RECEIVED:
      resetComment(payload.comment);
      break;
    case CommentConstants.REMOVE_COMMENT:
      removeComment(payload.comment);
      break;
  }
}

module.exports = CommentStore;
