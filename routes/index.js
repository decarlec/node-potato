// index.js
// Author: Christian DeCarle
// Last Modified: December 3, 2017

var express = require('express');
var Potato = require('../controllers/potatoController')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res){
	Potato.getAllPotatoes(function(err, rows){
  		if (err){
  			res.json(err);
  		} else {
  			res.json(rows);
  		}
  	});
});

/*GET by ID*/
router.get('/:id', function(req, res, next) {
  	Potato.getPotatoById(req.params.id, function(err, rows){
  		if (err){
  			res.json(err);
  		} else {
  			res.json(rows);
  		}
  	});
});

//Add a new potato to database
router.post('/', function(req, res, next) {
	Potato.addPotato(req.body, function(err, count) {
		if (err){
			res.json(err);
		} else {
			res.json(req.body);
		}
	});
});

//delete potato from db
router.delete('/:id', function(req, res, next) {
	Potato.deletePotato(req.params.id, function(err, count){
		if(err){
			res.json(err);
		} else {
			res.json(count);
		}
	});
});

//update potato in db
router.put(':/id', function(req, res, next){
	Potato.updateTask(req.params.id, req.body, function(err, rows){
		if(err){
			res.json(err);
		} else {
			res.json(rows);
		}
	});
});

module.exports = router;
