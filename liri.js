//var Movie = require("./omdb.js");
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('spotify');
var request = require('request');

var input = process.argv;

var command = input[2];
var searchTerm = input[3];



// Twitter section
function twitterSearch() {
var client = new Twitter({
  consumer_key: 'qLqybM8VYqzWVSAjSoBc0ZfSi',
  consumer_secret: 'NJqMA7h5QAu5FsGqRDRO82qXCNUUmDU9M2WAxffuQVaT5mVJnQ',
  access_token_key: '770467513729708032-Rkxzklx8SGO2SuKzQRESUyiVf2WsZGL',
  access_token_secret: 'wbs7DdPdgmjKXYxUJjuxRMBXUVpcCR9M7dMB6pBmsxs1k',
});

    client.get('statuses/user_timeline', {q: 'smash_crate', count: 20}, function(error, tweets, response) {
    if (!error) {
        for (i=0; i<tweets.length; i++) {
        //tweetsArray.push(tweets[i].text);
        console.log('Tweet number ' + (i + 1) +  '/20');
        console.log('Tweet created at: ' + '\n' + tweets[i].created_at);
        console.log('Tweet: ' + '\n' + tweets[i].text);
        console.log('=========================================================');
         }
    }
    });
}
// end Twitter section

// Spotify section
function spotifySearch() {
    Spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
            //base ->console.log(data.tracks.items[0]);

            console.log('Artist name: ' + data.tracks.items[0].artists[0].name);
            console.log('Track name: ' + data.tracks.items[0].name);
            console.log('Preview URL: ' + data.tracks.items[0].preview_url);
            console.log('Abum name: ' + data.tracks.items[0].album.name);

            //this works ->console.log(data.tracks.href);
            //console.log(data.tracks.artists);
        // Do something with 'data' 
    });
}

function customSpotifySearch(searchedSong) {
    Spotify.search({ type: 'track', query: searchedSong }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
            //base ->console.log(data.tracks.items[0]);

            console.log('Artist name: ' + data.tracks.items[0].artists[0].name);
            console.log('Track name: ' + data.tracks.items[0].name);
            console.log('Preview URL: ' + data.tracks.items[0].preview_url);
            console.log('Abum name: ' + data.tracks.items[0].album.name);

            //this works ->console.log(data.tracks.href);
            //console.log(data.tracks.artists);
        // Do something with 'data' 
    });
}
//End Spotify section

// OMDB section
function movieSearch() {
    if (searchTerm == null) {
        movieName = "Mr+Nobody";
        console.log(movieName);
    } else {
        string = searchTerm;
        movieName = string.replace(/\s/g, "+");
        console.log(movieName);
    }

    var queryUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";
    request(queryUrl, function(error, response, body){
        //if the request is successful
        if(!error && response.statusCode === 200){
    //request('http://www.omdbapi.com/?t=mr+nobody', function (error, response, body) {
    //     request('http://www.omdbapi.com/?t=' + movieName, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred 
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    // console.log('body:', JSON.parse(body).Title); // Print the HTML for the Google homepage.
    // console.log(movieName);

           console.log("Title:" + JSON.parse(body).Title);
            //log the release year
            console.log("Year: " + JSON.parse(body).Year);
            //Log the IMDB Rating
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            //The country
            console.log("Country: " + JSON.parse(body).Country);
            //The language
            console.log("Language: " + JSON.parse(body).Language);
            //The plot!
            console.log("Plot: " + JSON.parse(body).Plot);
            //The actors!
            console.log("Actors: " + JSON.parse(body).Actors);
            //Rotten Tomatoes Rating
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            //Rotten Tomatores URL
            console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
        }
    });
}
// end OMDB section


if (command == 'my-tweets') {
    console.log('showing last 20 tweets:');
    twitterSearch();
}

if (command == 'spotify-this-song') {
    if (searchTerm == null) {
        spotifySearch();
    } else {
        customSpotifySearch(searchTerm);
    }
}

if (command == 'movie-this') {
 movieSearch();
}


if (command == 'do-what-it-says') {
    fs.readFile('random.txt', 'utf8', function(err, data){
    if(err){
        util.log(err);
    }
    var commands = data.split(",");
    spotifySearch(commands[1]);
    return;
});
}


