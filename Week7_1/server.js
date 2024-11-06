var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

// The 'logger' middleware logs all actions with timestamp
app.use(function (req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
});

// This method returns the directory location of a file to the response
// upon receiving a request or else sends a CANNOT GET error
app.use(function (req, res, next) {
    // Uses path.join to find path where the file should be
    var filePath = path.join(__dirname, "static", req.url);
    // Built-in fs.stat gets info about a file
    fs.stat(filePath, function (err, fileInfo) {
        if (err) {
            next();
            return;
        }
        if (fileInfo.isFile()) res.sendFile(filePath);
        else next();
    });
});

// There is no 'next' argument because this is the last middleware
app.use(function (req, res) {
    //Set status code to 404
    res.status(404);

    // Sends the error "File not found!"
    res.send("File not found!");
});

// Starts the app on port 3000 and display a message when it's started
app.listen(3000, function () {
    console.log("App started on port 3000");
});
