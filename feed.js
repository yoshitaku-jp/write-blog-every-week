/*
 * feed.js
 */


var FeedParser = require('feedparser');  
var request = require('request');  
var feed = 'https://yoshitaku-jp.hatenablog.com/rss';

var req = request(feed);  
var feedparser = new FeedParser({});

var items = [];

req.on('response', function (res) {  
  this.pipe(feedparser);
});

feedparser.on('meta', function(meta) {  
  console.log('==== %s ====', meta.title);
});

feedparser.on('readable', function() {  
  while(item = this.read()) {
    // console.log(item);
    items.push(item);
  }
});

feedparser.on('end', function() {  
  // show titles
  items.forEach(function(item) {
    //console.log('- [' + item.title + ']' + '(' + item.link + ')'　+ item.pubdate);
  });
});

// Import Admin SDK
var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: process.env.NODE_API_KEY,
  authDomain: process.env.NODE_AUTH_DOMAIN,
  databaseURL: process.env.NODE_DATABASE_URL,
  projectId: process.env.NODE_PROJECT_ID,
  storageBucket: process.env.NODE_STORAGE_BUCKET,
  messagingSenderId: process.env.NODE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)


// Get a database reference to our blog
var db = firebase.database();
var ref = db.ref("users");

var usersRef = ref.child("users");
function setFeedData(meta,item){
  user = meta.author

  date = item.pubdate
  title = item.title
  url = item.pubdate

  usersRef.set({
    user: {
      name: user,
      "posts": {
        "post1": {
          "date": date,
          "title": title,
          "url": url
        }
      }
    }
  });
}

setFeedData(meta,item)
//var db = firebase.database();
//var ref = db.ref("server/saving-data/fireblog");

//var usersRef = ref.child("users");
//usersRef.set({
//  alanisawesome: {
//    date_of_birth: "June 23, 1912",
//    full_name: "Alan Turing"
//  },
//  gracehop: {
//    date_of_birth: "December 9, 1906",
//    full_name: "Grace Hopper"
//  }
//});