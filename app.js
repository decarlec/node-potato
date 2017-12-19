// app.js
// Author: Christian DeCarle
// Last Modified: December 3, 2017

var express = require('express');
var potatoes = require('./routes/index');
var app = express();

//Use the routes from the index.js route file
app.use('/potatoes', potatoes);

//Start the server listening on port 3000
app.listen(3000, () => console.log('Potato API listening on port 3000!'));