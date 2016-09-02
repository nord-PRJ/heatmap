//Lets load the mongoose module in our program
var mongoose = require('mongoose');
//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost/clicks');

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Click = mongoose.model('Click', {x: Number,
  y: Number,
  // coor: Number,
  winHeightname: Number,
  docHeight: Number,
  winWidth: Number,
  docWidth: Number,
  element: String,
  clickText: String,
  date: String,
  time: String,});

/**
 * Lets Use our Models
 * */

//Lets create a new user
var click1 = new Click({x: 377,
  y: 29,
  winHeightname: 803,
  docHeight: 1063,
  winWidth: 1056,
  docWidth: 1056,
  element: '[a, context: a]',
  clickText: 'Contact',
  date: 'Wed Aug 31 2016 09:40:07 GMT-0400 (EDT)',
  time: '9:40:7',});


//Lets try to print and see it. You will see _id is assigned.
console.log(click1);
//Lets save it
click1.save(function (err, clickObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', clickObj);
  }
});
