var db = require('../dbConnection');

var Potatoes = {
	getAllPotatoes: function(callback){
		return db.query("Select * from potatoes", callback);
	}

	getPotatoById: function(id, callback){
		return db.query("SELECT * FROM potatoes where PotID = ?", 
		[id], callback);
	}

	addPotato: function(Potato, callback){
		return db.query("INSERT INTO potatoes (YearID, GeoID, EstID, Vector, Val) VALUES (?, ?, ?, ?, ?)",
        [Potato.YearId, Potato.GeoID, Potato.EstID, Potato.Vector, Potato.Val], callback);
	}

	deletePotato: function(id, callback){
		return db.query("DELETE FROM potatoes WHERE PotID = ?",
		[id], callback);
	}
	
	updatePotato: function(id, Potato, callback){
		return db.query("UPDATE potatoes SET YearID = ?, GeoID = ?, EstID = ?, Vector = ?, Val = ? WHERE PotID = ?",
		[Potato.YearID, Potato.GeoID, Potato.EstID, Potato.Vector, Potato.Val], callback);
	}
}