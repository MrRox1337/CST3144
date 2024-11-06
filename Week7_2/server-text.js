const http = require("http");
const port = 3000;

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World cst3144\n");
}).listen(port, () => {
    console.log("Server running at http://localhost:${port}");
});
