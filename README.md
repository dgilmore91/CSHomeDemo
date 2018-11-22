## Running the app

Before running make sure you've ran `bundle install` from the root, see the Gemfile for more info on what I've used.

To run the app navigate to the root folder and run `rails server`, you can find it running at `localhost:3000`. 

The back end is a simple JSON API while the front end is React. There is an additional
stylesheet in the assets folder for the layout - nothing too fancy though.

The app comes with pre seeded data as specified in `db/seeds.rb` and a prepopulated database but if you come into any 
trouble try running `rake db:migrate` followed by `rake db:seed`.

## Versions

Ruby Version: 2.5.3

Rails Version: 5.2.1

## Caveats

I've developed this on a Windows machine - if you're coming across any strangeness on a Unix OS let me know and I can 
take a look, but hopefully there shouldn't be any issues.

I was coming across an issue installing the `sqlite3` gem on Windows caused by `sqlite-native` so I've used a different 
version as specified in the Gemfile - if this is causing issues on another OS you can revert that to just `sqlite3`.



