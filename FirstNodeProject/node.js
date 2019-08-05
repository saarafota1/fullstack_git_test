var http = require('http');
var my_module = require('./myModules/firstCustomModule');
var Cat = require('./myModules/Cat');

http.createServer(function (req, res) {
    console.log("Got new Request... new text...");

    console.log(my_module.myDateTime());

    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.send("<h2>Sub Header</h2>");
    res.end('<h1>Hello World!</h1>'); // send data to client and close request
}).listen(8080);
console.log("Server is running...  new text...");

var cat = new Cat();
console.log(cat.eat());
