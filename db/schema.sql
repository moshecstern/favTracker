### Schema
DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABLE coffees
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    type varchar(200) NOT NULL,
    company varchar(250),
    rating INT(2) DEFAULT 1,
    caffeinated BOOLEAN DEFAULT true,
	drank BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    genre varchar(200) NOT NULL,
    rating INT(2) NOT NULL,
	watched BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);