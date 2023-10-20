// Create web server with Node.js
// 1. Create a web server
// 2. Handle HTTP route GET / and POST / i.e. Home
// 3. Handle HTTP route GET /:username i.e. /chalkers
// 4. Function that handles the reading of files and merge in value
//    i.e. read from file and get a string
//         merge values into string
var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404: Page not found!");
  response.end();
}

// Handle a user request
function onRequest(request, response) {
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
  } else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");