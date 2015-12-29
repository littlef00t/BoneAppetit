# Bone Appetit

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Filling the empty/Hungry Heart is a web application inspired by Foodspotting build on Ruby on Rials and React.js. Hungry Heart allows users who want to share food or surplus of food with those who are in need/hungry. In filling another's empty stomach, you fill your own heart.
Hungry Heart allows users to:


<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] CRUD dishes
- [ ] Able to upload images with dish
Bonus?
- [ ] Rate the dish by clicking ('tried it and loved it')
- [ ] Comment on other users' dishes

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

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
Images can be created, read, (updated as bonus?) and destroyed in the browser.

[Details][phase-two]

### Phase 3: Images (and styling of Dishes?)(1 day)

Phase 3 allows the upload of images with the Dish. I will be using Cloudinary to store photos. I will also start adding styling using CSS.

[Details][phase-three]

### Phase 4: Comments (1 day)

I will be adding a new Comment Store and component.

[Details][phase-four]


### Bonus:
I will be implementing a map so users can search for food near their area.
Users can update their dishes.
You can just render page by refreshing, not going back to home page.


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
