// dbFunctions.js
// Author: Christian DeCarle
// Last Modified: December 3, 2017

var csv = require('fast-csv');
var fs = require('fs');
var mysql = require('mysql');

  
// Author: Christian DeCarle
// Last Modified: October 20, 2017
// This function cleans out the data from the database tables.
cleanDB = function(callback){

    // Create database connection object.
    var con = mysql.createConnection({
        host: "localhost",
        user: "node",
        password: "password",
        database: "potatoes"
    });

    // Make the database connection and perform queries inside 
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
        
        con.query("DELETE FROM years", function(err, result){
            if (err) throw err;
        });
        
        con.query("DELETE FROM est", function(err, result){
            if (err) throw err;
        });

        con.query("DELETE FROM geo", function(err, result){
            if (err) throw err;
        });

        con.query("DELETE FROM potatoes", function(err, result){
            if (err) throw err;
        });

        console.log("Cleaned database!");
    });

    callback();
}

// Author: Christian DeCarle
// Last Modified: October 20, 2017
// Populate some of the basic database tables.
initDB = function(callback){

    // Create database connection object.
    var con = mysql.createConnection({
        host: "localhost",
        user: "node",
        password: "password",
        database: "potatoes"
    });

    //Connect to DB
    con.connect(function(err){
        if (err) throw err;

        //Insert Years
        for(var year=1908; year<2018; year++){
            con.query("INSERT INTO Years (YearID) VALUES (?)", year, function(err, result){
                if (err) throw err;
            });
        }
        console.log("Years Added!");

        //Insert Locations
        var locations = [
            ["GEO1", "Canada"],
            ["GEO2", "Newfoundland and Labrador"],
            ["GEO3", "Prince Edward Island"],
            ["GEO4", "Nova Scotia"],
            ["GEO5", "New Brunswick"],
            ["GEO6", "Quebec"],
            ["GEO7", "Ontario"],
            ["GEO8", "Manitoba"],
            ["GEO9", "Saskatchewan"],
            ["GEO10", "Alberta"],
            ["GEO11", "British Columbia"] 
        ];

        con.query("INSERT INTO Geo (GeoID, GeoName) VALUES ?", [locations],
        function(err, result){
            if (err) throw err;
        });

        console.log("Locations Added!");

        //Insert Ests
        var ests = [
            ["EST1", "Seeded area, potatoes (acres)"],
            ["EST2", "Average yield, potatoes (hundredweight per harvested acres)"],
            ["EST3", "Production, potatoes (hundredweight)"],
            ["EST4", "Average farm price, potatoes (dollars per hundredweight)"],
            ["EST5", "Total farm value, potatoes (dollars)"],
            ["EST6", "Harvested area, potatoes (acres)"],
            ["EST7", "Amount sold, consumed, seeded, or fed to livestock, potatoes (hundredweight)"]
        ];

        con.query("INSERT INTO Est (EstID, EstDesc) VALUES ?", [ests],
        function(err, result){
            if (err) throw err;
        });

        console.log("Ests Added!");       
    });

    callback();

}

// Author: Christian DeCarle
// Last Modified: October 20, 2017
// This function reads data from the csv file and puts in in the database
readCsv = function(callback){

    var con = mysql.createConnection({
        host: "localhost",
        user: "node",
        password: "password",
        database: "potatoes"
    });

    //Connect to DB
    con.connect(function(err){
        if (err) throw err;

    //Read from file
    var stream = fs.createReadStream("00010014-eng.csv");

    var csvStream = csv
        .fromStream(stream, {headers : true})
        .on("data", function(data){
            var year = parseInt(data.Ref_Date.replace(/\s/g,''));
            var geoID = "GEO" + data.Coordinate.replace(/\s/g,'').split('.')[0];
            var estID = "EST" + data.Coordinate.replace(/\s/g,'').split('.')[1];
            var vector = data.Vector.replace(/\s/g,'');
            var value = parseFloat(data.Value.replace(/\s/g,''));

            if(isNaN(value)) value = null;

            con.query("INSERT INTO potatoes (YearID, GeoID, EstID, Vector, Val) VALUES (?, ?, ?, ?, ?)",
            [year, geoID, estID, vector, value],
            function(err, result){
                if (err) throw err;
            });
        })
        .on("end", function(){
            console.log("Finished reading file");
        });

    });

    callback();
    
}

module.exports = { 
    cleanDB: cleanDB,
    initDB: initDB,
    readCsv: readCsv
}

