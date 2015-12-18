# Phase 2: Flux Architecture and Dish CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* DishesIndex
  - DishIndexItem
  - DishDetail
* DishForm


### Stores
* Dish

### Actions
* ApiActions.receiveAllDishes -> triggered by ApiUtil
* ApiActions.receiveSingleDish
* ApiActions.deleteDish
* DishActions.fetchAllDishes -> triggers ApiUtil
* DishActions.fetchSingleDish
* DishActions.createDish
* DishActions.editDish
* DishActions.destroyDish

### ApiUtil
* ApiUtil.fetchAllDishes
* ApiUtil.fetchSingleDish
* ApiUtil.createDish
* ApiUtil.editDish?
* ApiUtil.destroyDish

## Gems/Libraries
* Flux Dispatcher (npm)
