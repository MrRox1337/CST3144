var express = require("express");

var ALLOWED_IPS = ["127.0.0.1", "123.45.67.89"];

var api = express.Router();

function welcome(request, response) {
    response.send("Welcome to Olivia's home!");
}
api.get("/users", welcome);

api.use(function (request, response, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(request.ip) !== -1;
    if (!userIsAllowed) {
        response.status(401).send("Not authorized!");
    } else {
        next();
    }
});

// Additional routes if necessary
api.get("/users", function (request, response) {});
api.get("/user", function (request, response) {});

api.get("/messages", function (request, response) {});
api.get("/message", function (request, response) {});

// Error 404 middleware
api.use(function (request, response) {
    response.status(404).send("Page not found!");
});

module.exports = api;
