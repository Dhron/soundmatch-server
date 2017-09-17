var express = require('express');

var app = express(); //instance of express
var routes = require('./routes'); //our routes

var morgan = require('morgan')

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

//For logging
app.use(morgan('tiny'))

//API Endpoints
app.use('/', routes); 

//Server
app.listen(3000, () => {
  console.log('App listening on port 3000');
});

