/*
 * feed.js
 */


var FeedParser = require('feedparser');  
var request = require('request');  
var feed = 'https://yoshitaku-jp.hatenablog.com/rss';

var date_utils = require('date-utils');

// Import Admin SDK
var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCq_CTzRTMAg9qwKnBHGcj_JyUsWY65Acc',
  authDomain: 'write-blog-every-week.firebaseapp.com',
  databaseURL: 'https://write-blog-every-week.firebaseio.com',
  projectId: 'write-blog-every-week',
  storageBucket: 'write-blog-every-week.appspot.com',
  messagingSenderId: '226463031234'
}

firebase.initializeApp(config)


var req = request(feed);  
var feedparser = new FeedParser({});

var author = "yoshitaku_jp";
var items = [];

req.on('response', function (res) {  
  this.pipe(feedparser);
});

feedparser.on('end', function() {  
  
  var posts = {};

  number = 0;
  items.some(function(item) {
    var post = "post_" + number
//    console.log(post);

    posts[post] = {};
//    console.log(posts[post]);
    var format_pubdate = item.pubdate.toFormat('YYYY/MM/DD');

    posts[post]["title"] = item.title;
    posts[post]["url"] = item.link;
    posts[post]["date"] = format_pubdate;

    number = number + 1;
    if (number == "5"){
      return true;
  }

    console.log('- [' + item.title + ']' + '(' + item.link + ')'　+ item.pubdate);
  });

  // Get a database reference to our blog
  var db = firebase.database();
  var ref = db.ref("users");

  var usersRef = ref.child("users");
  var user = {
    name: author,
    posts: posts
  };

  var updates = {};
  updates['/users/' + author] = user;

  return firebase.database().ref().update(updates);
});

feedparser.on('readable', function() {  
  while(item = this.read()) {
    items.push(item);
  }
});
