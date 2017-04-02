var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'qLqybM8VYqzWVSAjSoBc0ZfSi',
  consumer_secret: 'NJqMA7h5QAu5FsGqRDRO82qXCNUUmDU9M2WAxffuQVaT5mVJnQ',
  access_token_key: '770467513729708032-Rkxzklx8SGO2SuKzQRESUyiVf2WsZGL',
  access_token_secret: 'wbs7DdPdgmjKXYxUJjuxRMBXUVpcCR9M7dMB6pBmsxs1k',
});

var tweetsArray = [];

var params = {screen_name: 'smash_crate'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }

});

function search() {
client.get('statuses/user_timeline', {q: 'smash_crate', count: 20}, function(error, tweets, response) {
   //console.log(tweets[0].text);
   //console.log('its supposed to get to here');
   for (i=0; i<tweets.length; i++) {
     //tweetsArray.push(tweets[i].text);
     console.log(tweets[i].text);
   }
});
}


search();
//console.log('ending array: ' + tweetsArray);