var http = require("http");
var fs = require('fs');
var PORT = 7000;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {
        case "/":
            return displayPage('index.html', path, req, res);
        case "/food":
            return displayPage('favfoods.html', path, req, res);
        case "/movies":
            return displayPage('favmovies.html', path, req, res);
        case "/frameworks":
            return displayPage('favframeworks.html', path, req, res);
        default:
            return display404(path, req, res)
    }
}


function displayPage(file, url, req, res) {
    fs.readFile("pages/" + file, function (err, data) {
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

}

function display404(url, req, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" +
      "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }
  