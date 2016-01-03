# Hungry Heart

[heroku]: www.hungryheart.xyz

## Minimum Viable Product

Hungry Heart is a web application inspired by Foodspotting built on Ruby on Rails and React.js. Hungry Heart allows users who want to share food or surplus of food with those who are in need/hungry. In filling another's empty stomach, you fill your own heart.
Hungry Heart allows users to:

- [X] Create an account
- [X] Log in / Log out
- [X] CRD dishes and comments (only user of dish and comments can manipulate own dish/comments)
- [X] Able to upload images with dish

## Design Docs

[view]: ./mydocs/views.md
[schema]: ./mydocs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Image Model (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). I will also implement JSON API for dishes.

[Details][phase-one]

### Phase 2: Flux Architecture and DISH CRUD (2 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Dish store will be implemented and a set of actions corresponding to
the needed CRUD functionality created.  Once this is done, I will create React
views for the Dish `Index`, `IndexItem` and `Form`.  At the end of Phase 2,
Dishes can be created, read, (updated as bonus?) and destroyed in the browser.

[Details][phase-two]

### Phase 3: Images (and styling)(1 day)

Phase 3 allows the upload of images with the Dish. I will be using Cloudinary to store photos. I will also start adding styling using CSS.

[Details][phase-three]

### Phase 4: Comments (1-2 days)

I will be adding a new Comment Store and views for Comment `IndexItem` and `Form`. At the end of Phase 4,Comments can be created, read, and destroyed in the browser. I will also implement JSON API for dishes.
I will be adding styling using Materialize.


[Details][phase-four]


### Bonus:
I will be adding styling using Materialize.
I will be implementing a search where the dishes will update to show only the dishes that begin with the letters in the search form.
Users can update their dishes.


[phase-one]: ./mydocs/phases/phase1.md
[phase-two]: ./mydocs/phases/phase2.md
[phase-three]: ./mydocs/phases/phase3.md
[phase-four]: ./mydocs/phases/phase4.md
