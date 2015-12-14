# Bone Appetit

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Bone Appetit is a web application inspired by Foodspotting built using Ruby on Rails
and React.js. Bone Appetit targets the puppy population, finding and sharing delicious dishes in the area. Bone Appetit allows puppy users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Upload, see, edit, and delete photos (along with a description of the dish)
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
BCrypt). After signup, user will be directed to their profile, where a list of all their photos and brief descriptions will be.

[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Note store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Images `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Notes can be created, read, edited and destroyed in the browser. Notes should
save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Map (2 days)

Phase 3 adds a map to the main page. I'm planning on making it the application's React root component. 
organization to the Notes. Notes belong to a Notebook, which has
its own `Index` view. Create JSON API for Notebooks. Notes can also now be
tagged with multiple tags. Users can bring up notes in a separate `SearchIndex`
view by searching for their tags. Once the tag search is implemented, I will
extend this to a fuzzy search through every Note's content.

[Details][phase-three]

### Phase 4: Allow Complex Styling in Notes (1 day)

Using the react-quill library (based on Quill.js), allow for complex styling of
notes.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Phase 5 introduces two new features. First, users can set reminders on notes
which will at the time they are set for prompt the user to review and edit the
given note. In addition, I will implement a feature that asks users to review
notes once they reach a certain age and ask whether they should be kept,
archived, or deleted.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the NotebookForm).



[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
