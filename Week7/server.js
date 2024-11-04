const express = require("express"); // Requires the Express module
const http = require("http");

// Calls the expresss function to start a new Express application
const app = express();

// Maintain order of middleware if using next()
// Middleware 1
app.use(function (request, response, next) {
    console.log("In comes a requires to: " + request.url);
    next();
});
// Middleware 2
app.use(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, world!");
});

// Start the server
http.createServer(app).listen(3000);
