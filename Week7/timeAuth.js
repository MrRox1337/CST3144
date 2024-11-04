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
app.use(function (request, response, next) {
    var minute = new Date().getMinutes();
    if (minute % 2 === 0) {
        next();
    } else {
        response.statusCode = 403;
        response.end("Not authorized.");
    }
});
// Middleware 2
app.use(function (request, response) {
    response.end('Secret info: the password is "swordfish"! ');
});

// Start the server
http.createServer(app).listen(3000);
