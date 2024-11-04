var welcome = require("./generateMessage");
var { getCurrentTime, getServerStatus } = require("./helper");
var messages = require("./responses");
var randomNumber = require("./randomNumber");
// var chalk = (await import ("chalk")).default;
var chalk = require("chalk");

var http = require("http"); // Requires the built-in http module

// Defines a function that'll handle incoming HTTP requests
function requestHandler(request, response) {
    console.log("Incoming request to: " + request.url);
    var welcomeMessage = welcome();
    var serverResponse = Math.random < 0.5 ? messages.successMessage : messages.errorMessage;
    var statusNumber = randomNumber();

    payload = {
        date_received: getCurrentTime(),
        server_status: getServerStatus(),
        message: welcomeMessage,
        response: serverResponse,
        statusCode: statusNumber,
    };

    console.log(payload);
    if (statusNumber <= 33) {
        console.log(chalk.green(`Status Code: ${statusNumber}`));
    } else if (statusNumber <= 66) {
        console.log(chalk.yellow(`Status Code: ${statusNumber}`));
    } else {
        console.log(chalk.red(`Status Code: ${statusNumber}`));
    }
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(payload));
}

// Creates a server that uses your function to handle requests
var server = http.createServer(requestHandler);

// Starts the server listening on port 3000
server.listen(3000);
