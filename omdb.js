var request = require('request');
request('http://www.omdbapi.com/?t=mr+nobody', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});

// constructor function for creating movie objects
// var Movie = function(title, releaseYear, imdbRating, country, language, plot, actors, rottenRating, rottenUrl) {
//   this.title = title;
//   this.releaseYear = releaseYear;
//   this.imdbRating = imdbRating;
//   this.country = country;
//   this.language = language;
//   this.plot = plot;
//   this.actors = actors; 
//   this.rottenRating = rottenRating;
//   this.rottenUrl = rottenUrl;
//   // prints out a different message depending on whether dud is male or female
//   this.printMovie = function() {
//     console.log(Movie);
//   };
// };



//http://www.omdbapi.com/?t=mr+nobody
// exporting our movie constructor.We will require it in liri.js
//module.exports = Movie;
