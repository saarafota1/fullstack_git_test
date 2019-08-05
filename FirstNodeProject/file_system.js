var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    if (q.action) {
        if (q.action == "writeLog") {
            writeLog("Client Sent: , " + q.month + " , " + q.year);
        }
        if (q.action == "deleteLog") {
            deleteLog('./log.txt');
        }
    }

    res.end(txt);
}).listen(8080);


function writeLog(msg) {
    var log = "[" + new Date() + "] , " + msg + "\n";

    fs.appendFile('./log.txt', log, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function deleteLog(file_name) {
    fs.unlink(file_name, function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
}