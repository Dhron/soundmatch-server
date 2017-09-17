var express = require('express');

var app = express(); //instance of express
var routes = require('./routes'); //our routes

var morgan = require('morgan')

var port=Number(process.env.PORT || 3000);

//For logging
app.use(morgan('tiny'))

//API Endpoints
app.use('/', routes); 

//Server
app.listen(port, () => {
  console.log('App listening on port 3000');
});

