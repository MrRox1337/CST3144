var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("you just sent a GET request, friend");
});
app.post("/", function (req, res) {
    res.send("a POST request? nice");
});
app.put("/", function (req, res) {
    res.send("i don't see a lot of PUT requests anymore");
});
app.delete("/", function (req, res) {
    res.send("oh my, a DELETE??");
});
app.listen(3000, function () {
    console.log("CRUD app is listening on port 3000");
});
