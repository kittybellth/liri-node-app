# liri-node-app

### Purpose
To build an app by using the CLI to determines to send a request to the Twitter, Spotify or IMDB APIs. 


# Technology
 ## NodeJS

## NPM
* `tweeter`
* `Spotify`
* `request`

### How to use this app
 * Once you git pull you should run this file `liri.js` on Terminal or Bash then install npm packages included inside    package.json.
 
 * if you have a twitter app you should type the necessary keys and tokens into `keys.js` to run the `my-tweets` command properly.
 
### Each command should run the result as following results

1. `node liri.js my-tweets`

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

   * if no song is provided then your program will default to
     * "The Sign" by Ace of Base

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If you don't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-what-it-says`
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     * Feel free to change the text in that document to test out the feature for other commands.
