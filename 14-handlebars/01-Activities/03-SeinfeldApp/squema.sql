--     * The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), 
-- name (varchar), coolness_points (int), and attitude (varchar).

CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors
(
  id int
  AUTO_INCREMENT,
  name varchar
  (30) NOT NULL,
  coolness_points int,
  attitude varchar
  (30) NOT NULL,
  PRIMARY KEY
  (id)
);

INSERT INTO actors (name, coolness_points, attitude)
VALUES('Adam Sandler', 1000, 'happy'),
VALUES('Will Smith', 700, 'happy'),
VALUES('Jason Statham', 1100, 'angry'),
VALUES('Kevin Hart', 650, 'serious')