var express = require('express');
var router = express.Router();
var http = require('http');
var httpResponse = require('./../moduls/httpResponse');

router.get('/movieList', function (req, res, next) {
    http.get('http://www.omdbapi.com/?s=black&apikey=21af947d', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.json(JSON.parse(data));
            console.log(JSON.parse(data));
        });

    }).on("error", (err) => {

        console.log("Error: " + err.message);
        res.end("Error" + err.message);
    });

});

module.exports = router;