CREATE DATABASE topSongs;

USE topSongs;

CREATE TABLE top_songs(
  position INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(100),
  song VARCHAR(100),
  year INT NOT NULL,
  raw_total FLOAT NOT NULL,
  raw_usa FLOAT NOT NULL,
  raw_uk FLOAT NOT NULL,
  raw_eur FLOAT NOT NULL,
  raw_row FLOAT NOT NULL,
  PRIMARY KEY (position)
)

-- position,artist,song,year,raw_total,raw_usa,raw_uk,raw_eur,raw_row
