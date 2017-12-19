use potatoes;

DROP TABLE IF EXISTS Potatoes;
DROP TABLE IF EXISTS Years;
DROP TABLE IF EXISTS Geo;
DROP TABLE IF EXISTS Est;


CREATE TABLE Years(
	YearID int(4) NOT NULL,
    PRIMARY KEY (YearID)
);

CREATE TABLE Geo(
	GeoID varchar(7) NOT NULL,
    GeoName varchar(30),
    PRIMARY KEY (GeoID)
);

CREATE TABLE Est(
	EstID varchar(6) NOT NULL,
    EstDesc varchar(120),
    PRIMARY KEY (EstID)
);

CREATE TABLE Potatoes(
	PotID int NOT NULL AUTO_INCREMENT,
    YearID int(4),
    GeoID varchar(7),
    EstID varchar(6),
    Vector varchar(6),
    Val double,
    PRIMARY KEY (PotID)
);