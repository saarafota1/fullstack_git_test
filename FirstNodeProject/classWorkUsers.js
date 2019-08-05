var http = require('http');
var url = require('url');
var users = [
    { name: "saar", age: 36, phone: "0503535355" },
    { name: "saar", age: 36, phone: "0503535355" }
];

http.createServer(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); // cors domain fix
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var q = url.parse(req.url, true).query;


    var result = {};
    result.success = true;
    result.error = false;
    result.message = "Got All Users";
    result.data = users;

    res.end(JSON.stringify(result));
}).listen(8080);