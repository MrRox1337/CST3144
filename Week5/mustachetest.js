var mustache = require("mustache");
var result = mustache.render("Hi, {{first}} {{last}}!", {
    first: "Nicole",
    last: "Kidman",
});
// Returns "Hello, Nicole Kidman!"
console.log(result);
