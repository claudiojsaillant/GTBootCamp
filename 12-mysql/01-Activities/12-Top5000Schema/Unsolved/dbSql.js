var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "whatsdown",
  database: "topSongs"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n")
  rangeDisplay(499, 901)
});

function queryMe(what) {
    // Artist  query specificArtist('Rihanna');
    // Repeated query repeatedArtist();
    // Range query rangeDisplay(499, 901);


}

function specificArtist(artist) {
    var query = connection.query(
        "SELECT * FROM top_songs where ?",
        [
          {
            artist: artist
          },
        ],
        function(err, res) {
            if(err) return err;
          console.log(res.length + " Songs found!");
        })
}

function repeatedArtist () {
    var query = connection.query(
        "SELECT artist, COUNT(*) FROM top_songs GROUP BY artist HAVING COUNT(*) > 1",
        function(err, res) {
            if(err) return err;

          for(i = 0; i < res.length; i++){
              console.log('Artist:', res[i].artist);
              console.log('Times repeated:', res[i]['COUNT(*)'])
          }
        })
}
 
function rangeDisplay (from, to) {
    var query = connection.query(
        "SELECT * FROM top_songs where position > " + from + " and position < " + to,
        function(err, res) {
            if(err) return err;
            console.log(res);
        //   for(i = 0; i < res.length; i++){
        //       console.log('Artist:', res[i].position);
        //       console.log('Position:', res[i]['Artist'])
        //   }
        })
}


