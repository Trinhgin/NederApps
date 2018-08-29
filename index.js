// Business website: Node.js
// Due Friday by 10pm  Points 10  Submitting a website url
// Static Website on Node.js

// Instructions
// - Take the website that you built previously, and create a new branch on git so the old version is 
// still available for grading / reviewing.
// - Put your website on a Node.js server, so that it can be reached at http://localhost:3000.
// - Your Node.js server does not need any routes, since the entire website is static content.
// - Check each of your links and images to ensure that they still work.
// - Express by default looks for `index.html` for the first page.

// Important Notes
// - Remember to add "node_modules" to your .gitignore file. Otherwise, a lot of other people's code is going to end up 
// in your repository.
// - If you did not originally create the repo, you must "fork" it on github, which will make a copy and put it on your github.
// - express.static() looks for 'index.html' by default, so rename your home page to that. Alternatively, serve a 
// different default file using the following syntax:

// app.use(express.static('myStaticPath', {
//     index: 'myNonDefaultHomepage.html'
// }));


var express = require('express');
var app = express();

app.use(express.static('D:/morga/Documents/BSSA/Assignments/Assignment_week3/Business_website_node'));

var server = app.listen(3000);
