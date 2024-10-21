// Requires a 'url' module and puts it in a 'url' variable
var url = require("url");
// Uses the parse function of the 'url' module
var parsedURL = url.parse("http://www.example.com/profile?name=barry");
console.log(parsedURL.protocol); // "http:"
console.log(parsedURL.host); // "www.example.com"
console.log(parsedURL.query); // "name=barry"
