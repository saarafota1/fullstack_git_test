var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});




router.get('/getAllUsers', function (req, res, next) {
    var search = req.query.search;
    con.connect(function (err) {
        if (err) {
            console.log(err);
            con.end();
            res.end("There Was a Connection Error... ");

        }
        con.query("SELECT * FROM users where name LIKE '%" + search + "%'", function (err, result, fields) {
            if (err) {
                console.log(err);
                res.end("There Was A Query Select Error...");
            };
            console.log(result);
            con.end();
            res.json(result);

        });
    });

});

module.exports = router;