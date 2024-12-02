var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

// Set up the path where your static files are
var publicPath = path.resolve(__dirname, "public");
var imagePath = path.resolve(__dirname, "static");

// Send static files from the publicPath and imagePath
app.use("/public", express.static(publicPath));
app.use("/static", express.static(imagePath));

app.use(function (request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
    next();
});

http.createServer(app).listen(3000);
