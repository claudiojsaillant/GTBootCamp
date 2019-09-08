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
  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data...
  req.on("data", function (data) {

    // Add it to requestData.
    requestData += data;
    console.log(requestData);
  });

  // When the request has ended...
  req.on("end", function () {

    // Log (server-side) the request method, as well as the data received!
    console.log(req)
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end();
  });

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
  <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
  <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
  <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
  <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>POSTME</title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="">
      </head>
      <body>
          <h1>Hello!</h1>
          <form action = "http://localhost:7000/" method = "post">
              <input id="myinput" type="text" value="">
              <input id="submit" type="submit">
          </form>
          <!--[if lt IE 7]>
              <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
          <![endif]-->
          
          <script src="" async defer></script>
      </body>
  </html>`);
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
  