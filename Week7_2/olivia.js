var express = require("express");
var app = express();

function welcome(request, response) {
    response.send("Welcome to Olivia's homepage!");
}

function users(request, response) {
    // Convert userid into an integer
    var userId = parseInt(request.params.userid, 10); // base 10 or decimal
    response.send("Welcome to Olivia's homepage!");
}

function search(req, res) {
    if (req.query.q === "us elections") {
        res.send("Trump 2024");
    }
}

// Routes GET requests to /olivia to the request handler
app.get("/olivia", welcome);

// Matches requests coming into /users/123 and /users/olivia
app.get("/users/:userid", users);

// Matches requests coming to /search
app.get("/search", search);

// If you load something other than /olivia, serves a 404 error.
// If it is not a GET request, also servers a 404 error.
app.use(function (request, response) {
    response.status(404).send("Page not found!");
});

// Starts the server on port 3000
app.listen(3000);
