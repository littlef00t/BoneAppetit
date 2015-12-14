# Bone Appetit

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Bone Appetit is a web application inspired by Foodspotting built using Ruby on Rails
and React.js. Bone Appetit targets the puppy population, finding and sharing delicious dishes in the area. Bone Appetit allows puppy users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] CRUD images (along with a description of the dish)
- [ ] Able to link the above photos to map location
- [ ] Search for dishes in area (search by dish or puppy user)
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
BCrypt). After signup, user will be directed to their profile, where a list of all their photos and brief descriptions will be (the ImageIndex component), which will be done in phase 2.

[Details][phase-one]

### Phase 2: Flux Architecture and Image CRUD (3 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, an Image store will be implemented and a set of actions corresponding to
the needed CRUD functionality created.  Once this is done, I will create React
views for the Images `Index`, `IndexItem` and `Form`. I am currently not sure whether I will want to attach a description with the image and whether that needs a new store. At the end of Phase 2,
Images can be created, read, edited and destroyed in the browser. I may or may not start working on basic styling. It depends on how quickly I can finish the content of this phase. Content is my priority right now, not styling.

[Details][phase-two]

### Phase 3: Map and Map Markers(3 days)

Phase 3 adds a map to the main page. I'm planning on making it the application's React root component. You do not need to be signed in to access the map with treats in the area. When you click a treat/bone on the map, it takes you to the ImageIndexItem.

[Details][phase-three]

### Phase 4: The Search (1-2 days)

I am not quite sure how I'm going to implement the search aspect yet. I may create a Search Index, perhaps matching searches to keywords. To keep it simple, I may just keep it as a drop down to search for 5-8 specific dishes in the area.


[Details][phase-four]


### Phase 5: Styling Cleanup and Seeding (2-3 day)

I will be adding a lot more data to the database and more complex styling to the application.



[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
