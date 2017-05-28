var command = process.argv[2];

var Twitter = require('twitter');

var config = require("./keys.js");

var Twit = new Twitter(config.twitterKeys);

if (command === "my-tweets"){
    myTweeter();
};

function myTweeter(){
    Twit.get('statuses/user_timeline',{count: 10},function(err, tweets, res) {
        if(err) throw err;
        console.log("**********************************");
        console.log("Account name: "+tweets[0].user.name);
        console.log("**********************************");
        for(i = 0; i < tweets.length; i++){
            console.log("Date: "+tweets[i].created_at);
            console.log("Tweet: "+tweets[i].text); 
            console.log("------------------------------------------------");
        };
    });
};