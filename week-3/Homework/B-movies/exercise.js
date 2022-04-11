/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
const allMovies = document.querySelector("#all-movies");
const moviesNumber = document.querySelector("#movies-number");
const showMovies = (movieArray) => {
 moviesNumber.textContent = movies.length;
 movieArray.forEach( (movie) => {
  const p = document.createElement ("p");
  p.textContent = `${movie.title} ${movie.director}`;
  allMovies.appendChild(p);
 });
};

const myMovie = {
  title: "Spider-Man",
  director: "Sam Raimi",
  type: "Sci-Fi",
  haveWatched: true,
}

const addMovie = (movie) => {
  console.log(movies);
  setTimeout(() => {
    movies.push(movie);
    console.log(movies);
    showMovies(movies);
  }, 2000);
};

setTimeout(() => {
  showMovies(movies);
}, 1000);

setTimeout(() => {
  addMovie(myMovie);
}, 2000);

// create showMovies function


// create a new movie object for your favorite movie


// create addMovies function
