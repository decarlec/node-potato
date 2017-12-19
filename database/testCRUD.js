// runCRUD.js
// Author: Christian DeCarle
// Last Modified: October 26, 2017


console.log("HELLO! THIS IS CHRISTIAN DECARLE'S CRUD PROGRAM. \n\n");
console.log("HERE WE GO!!!\n\n\n");

// This is a reference to the crud module that holds all of the crud methods
var controller = require('./controllers/potatoController.js');

var potato = {
	YearId: 2023,
	GeoID: 'GEO1',
	EstID: 'EST1',
	Vector: 'Vector',
	Val: 9999
}

//Creates a new record in the database
controller.addPotato(potato, 
	function(results){
		console.log("Database addPotato Result: ");
		console.log(results);
	}
);

// Reads a record from the database
controller.getPotatoById(42768,
	function(results){
		console.log("Database getPotatoById Result: ");
		console.log(results);
	}
);

//Reads all records from database
controller.getAllPotatoes(function(results){
	console.log("Database getAllPotatoes result length:" + results.length);
});


//Updates a record in the database
controller.updatePotato(40349, potato,
	function(results){
		console.log("Database updatePotato Result: "+ results);
		console.log(results);
	});

// // Deletes a record from the database
controller.deletePotato(47778,
	function(results){
		console.log("Database deletePotato Result: "+ results);
		console.log(results);
});