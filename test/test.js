// test.js
// Author: Christian DeCarle
// Last Modified: December 3, 2017

var assert = require('assert');
var Potato = require('../controllers/potatoController');

//Potato functions
describe('potato', function(){

	//Potato controller functions
	describe('Controller', function() {

		//Checks if getAllPotatoes returns results
		it('returns Potatoes from the database', function(done){
			Potato.getAllPotatoes(function(results){
				assert(results.length > 0);
				done();
			});
		});

		//Checks if getPotatoById returns the correct potato data
		it('returns a potato row by ID', function(done){
			Potato.getPotatoById(42400, function(results){
				assert.equal(results[0].PotID,42400);
				done();
			});
		});
	});
});