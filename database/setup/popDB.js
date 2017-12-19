// app.js
// Author: Christian DeCarle
// Last Modified: October 20, 2017

var db = require('./dbFunctions.js');
var sync = require('synchronize');
var fiber = sync.fiber;
var await = sync.await;
var defer = sync.defer;

try {


	//Christian DeCarle - October 20, 2017
	//Create a synchronous function to run the database functions
	//to ensure that everything is running in the correct order.
	fiber(function(){
		var clean = await(db.cleanDB(defer()));

		var init = await(db.initDB(defer()));

		var result = await(db.readCsv(defer()));
	});

} catch(err){
	throw err;
}