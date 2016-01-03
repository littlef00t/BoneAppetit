# Phase 1: User Authentication, Image Model (1.5 days)

## Rails
### Models
* User
* Dish

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy, show(to capture current_user))
* Api::DishesController (create, destroy, index, show, update?)

### Views
* users/new.html.erb
* session/new.html.erb
* dishes/index.json.jbuilder
* dishes/show.json.jbuilder

## Flux
### Views (React Components)

### Stores

### Actions
ApiActions.receiveCurrentUser

### ApiUtil
ApiUtil.fetchCurrentUser

## Gems/Libraries
* BCrypt (Gem)
