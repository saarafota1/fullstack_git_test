var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var client_response = require('../modules/client_response');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myDb"
});
/* GET users listing. */
router.get('/', function (req, res, next) {
    client_response.clear();
    try {
        con.query('SELECT * FROM users', function (err, users, fields) {
            if (err) {
                console.log(err);
                //throw err;
                //client_response.setResponse(false, true, "There Was an Error...", err);
                client_response.success = false;
                client_response.error = true;
                client_response.message = "There Was an Error...";
                client_response.data = err;
                res.json(client_response);
            }
            //client_response.setResponse(true, false, "Users List", "users");
            client_response.success = true;
            client_response.error = false;
            client_response.message = "Users List";
            client_response.data = users;
            res.json(client_response);
        });
    } catch (catch_err) {
        console.log(catch_err);
        //client_response.setResponse(false, true, "There Was an Error...", catch_err);
        client_response.success = false;
        client_response.error = true;
        client_response.message = "There Was an Error...";
        client_response.data = catch_err;
        res.json(client_response);
    }
});

module.exports = router;
