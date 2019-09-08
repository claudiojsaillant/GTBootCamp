// Dependencies
var fs = require('fs');
var http = require("http");

var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  var path = req.url;
  displayPage('index.html', path, req, res);
}




function displayPage(file, url, req, res) {
  fs.readFile(file, function (err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
    console.log(data, 'done')
  });

}

// Start our server
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
