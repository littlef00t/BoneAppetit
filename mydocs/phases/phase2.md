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
* ApiActions.receiveOneDish
* ApiActions.deleteDish
* DishActions.fetchDishes -> triggers ApiUtil
* DishActions.fetchDish
* DishActions.createDish
* DishActions.destroyDish

### ApiUtil
* ApiUtil.fetchDishes
* ApiUtil.fetchDish
* ApiUtil.createDish
* ApiUtil.deleteDish

## Gems/Libraries
* Flux Dispatcher (npm)
