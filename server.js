var http = require("http");

http.createServer(function (req, res) {

	res.writeHead(200, { "Content-Type": "text/plain" });
	res.write("This is a demo app");
	res.end();

}).listen(3000);

console.log("listening at port 3000...");