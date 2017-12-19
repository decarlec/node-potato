// dbCRUD.js
// Author: Christian DeCarle
// Last Modified: December 3, 2017

var mysql = require('mysql');

// Author: Christian DeCarle
// Last Modified: December 3, 2017
// Creates a connection to the mySQL server
var con = mysql.createConnection({
    host: "localhost",
    user: "node",
    password: "password",
    database: "potatoes"
});

// Author: Christian DeCarle
// Last Modified: December 3, 2017
// Creates a row in the database
dbCreate = function(YearId, GeoID, EstID, Vector, Val, callback){
	con.query("INSERT INTO potatoes (YearID, GeoID, EstID, Vector, Val) VALUES (?, ?, ?, ?, ?)",
        [YearId, GeoID, EstID, Vector, Val],
        function(err, result){
            if (err) throw err;
            console.log("Database Create Result: "+ result);
     	}
    );
};

// Author: Christian DeCarle
// Last Modified: December 3, 2017
// Reads a row from the database based on the Potato ID
dbRead = function(PotID){
	con.query("SELECT * FROM potatoes where PotID = ?", 
		PotID, function(err, result){
			if (err) throw err;
			console.log("Database Read Result: "+ result);
		}
	);

};

// Author: Christian DeCarle
// Last Modified: December 3, 2017
//Reads all the rows from the database
dbReadAll = function(){
	con.query("SELECT * FROM potatoes", 
		PotID, function(err, result){
			if (err) throw err;
			console.log("Database ReadAll Result: "+ result);
		}
	);
}

// Author: Christian DeCarle
// Last Modified: December 3, 2017
// Updates the value of a row in the databse based on the Potato ID
dbUpdate = function(PotID, Val){
	con.query("UPDATE potatoes SET Val = ? WHERE PotID = ?",
		[Val, PotID], function(err, result){
			if (err) throw err;
			console.log("Database Update Result: "+ result);
		}
	);
};

// Author: Christian DeCarle
// Last Modified: December 3, 2017
// Deletes a record from the database based on Potato ID
dbDelete = function(PotID){
	con.query("DELETE FROM potatoes WHERE PotID = ?",
		PotID, function(err, result){
			if (err) throw err;
			console.log("Database Delete Result: "+ result);
		}
	);
};


// Exports the functions so this module can be imported.
module.exports = {
	dbCreate: dbCreate,
	dbRead: dbRead,
	dbUpdate: dbUpdate,
	dbDelete: dbDelete
};