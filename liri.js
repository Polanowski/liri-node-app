var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var twitterKey = require("./keys.js");
var liriArgument = process.argv[2];
var fs = require("fs");


/*---- Functions ----*/
var writeToLog = function(data) {
      fs.appendFile("log.txt", '\r\n\r\n');

      fs.appendFile("log.txt", JSON.stringify(data), function(err) {
            if (err) {
            return console.log(err);
            }

            console.log("log.txt was updated!");
      });
}