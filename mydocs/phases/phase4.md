# Phase 4: Comments (1-2 days)
## Rails
### Models
* Comment

### Controllers
* Api::CommentsController (show, create, destroy)

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* CommentIndexItem
* CommentForm

### Stores
* Comment

### Actions
* ApiActions.receiveOneComment -> triggered by ApiUtil
* ApiActions.deleteComment
* CommentActions.createComment
* CommentActions.deleteComment

### ApiUtil
* ApiUtil.createComment
* ApiUtil.deleteComment

## Gems/Libraries
Materialize-Sass
