var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "whatsdown",
    database: "playlist_db"
});

function getSongs(artist) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        query = 'SELECT * FROM songs WHERE Artist = ' + '"' + artist + '"'
        console.log(query);

        connection.query(query, function (err, res) {
            if (err) throw err;
            console.log(res, null, 2);
        });
    });
}

getSongs('Linking Park')