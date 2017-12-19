// potatoController.js
// Author: Christian DeCarle
// Last Modified: December 3, 2017

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "node",
    password: "password",
    database: "potatoes"
});

// Author: Christian DeCarle
// Last Modified: December 3, 2017
// This is a controller that can access the database and perform operations
var potatoController = {

	// Author: Christian DeCarle
	// Last Modified: December 3, 2017
	// This gets all potatoes from the database
	getAllPotatoes: function(callback){
		con.query("Select * from potatoes", function(err, results){
			if (err) throw err;
			return callback(results);
		});
	},

	// Author: Christian DeCarle
	// Last Modified: December 3, 2017
	// This gets a specific row from the database
	getPotatoById: function(id, callback){
		return con.query("SELECT * FROM potatoes where PotID = ?", 
		[id],  function(err, results){
			if (err) throw err;
			return callback(results);
		});
	},

	// Author: Christian DeCarle
	// Last Modified: December 3, 2017
	// This adds a data row to the database
	addPotato: function(Potato, callback){
		return con.query("INSERT INTO potatoes (YearID, GeoID, EstID, Vector, Val) VALUES (?, ?, ?, ?, ?)",
        [Potato.YearId, Potato.GeoID, Potato.EstID, Potato.Vector, Potato.Val],  function(err, results){
			if (err) throw err;
			return callback(results);
		});
	},

	// Author: Christian DeCarle
	// Last Modified: December 3, 2017
	// This deletes a data row in the database
	deletePotato: function(id, callback){
		return con.query("DELETE FROM potatoes WHERE PotID = ?",
		[id],  function(err, results){
			if (err) throw err;
			return callback(results);
		});
	},

	// Author: Christian DeCarle
	// Last Modified: December 3, 2017
	// This updates a data row in the database
	updatePotato: function(id, Potato, callback){
		return con.query("UPDATE potatoes SET YearID = ?, GeoID = ?, EstID = ?, Vector = ?, Val = ? WHERE PotID = ?",
		[Potato.YearID, Potato.GeoID, Potato.EstID, Potato.Vector, Potato.Val, id],  function(err, results){
			if (err) throw err;
			return callback(results);
		});
	}
};

module.exports = potatoController;