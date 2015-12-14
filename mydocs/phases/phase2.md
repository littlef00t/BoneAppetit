# Phase 2: Flux Architecture and Image CRUD (3 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* ImagesIndex
  - ImagesIndexItem
* ImageForm

### Stores
* Image

### Actions
* ApiActions.receiveAllImages -> triggered by ApiUtil
* ApiActions.receiveSingleImage
* ApiActions.deleteImage
* ImageActions.fetchAllImages -> triggers ApiUtil
* ImageActions.fetchSingleImage
* ImageActions.createImage
* ImageActions.editImage
* ImageActions.destroyImage

### ApiUtil
* ApiUtil.fetchAllImages
* ApiUtil.fetchSingleImage
* ApiUtil.createImage
* ApiUtil.editImage
* ApiUtil.destroyImage

## Gems/Libraries
* Flux Dispatcher (npm)
