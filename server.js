var http = require("http");

http.createServer(function (req, res) {

	res.writeHead(200, { "Content-Type": "text/plain" });
	

}).listen(3000);

console.log("listening at port 3000...");