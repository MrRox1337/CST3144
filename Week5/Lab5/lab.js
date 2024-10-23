var http = require("http"); // Requires the built-in http module

var courses = [
    { topic: "Math", location: "London", price: 100 },
    { topic: "Math", location: "Liverpool", price: 80 },
    { topic: "Math", location: "Oxford", price: 90 },
    { topic: "Math", location: "Bristol", price: 120 },
];

// Defines a function that’ll handle incoming HTTP requests
function requestHandler(request, response) {
    console.log("Incoming request to: " + request.url);
    // response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(courses, null, 2));
}
// Creates a server that uses your function to handle requests
var server = http.createServer(requestHandler);
// Starts the server listening on port 3000
server.listen(3000);
