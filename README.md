# Bone Appetit

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Bone Appetit is a web application inspired by Foodspotting built using Ruby on Rails
and React.js. Bone Appetit targets the puppy population, finding and sharing delicious dishes in the area. Bone Appetit allows puppy users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] CRUD dishes
- [ ] Able to upload images with dish
Bonus?
- [ ] Rate the dish by clicking ('tried it and loved it')
- [ ] Comment on other puppy users' dishes
- [ ] See dishes by highest ratings

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

I will be adding a new Comment Store and possible component.

[Details][phase-four]


### Phase 5: Likes (1 day)

I will be adding a new Likes Store and possible component.

### Bonus:
I will be implementing a map so puppies can search for treats near their area.
Puppies will be able to search by treats by highest ratings.
Puppies can update their dishes.


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
