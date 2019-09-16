var express = require('express');
var router = express.Router();
var con = require('./../DB/connection').getPool();
const bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Empty Page...');
});

router.post('/login', function (req, res, next) {
    console.log(req.body);
    var username = "";
    var password = "";
    if (req.body.username) {
        username = req.body.username;
    }
    if (req.body.password) {
        password = req.body.password;
    }

    if (password == "" || username == "") {
        req.session.user_logged_in = false;
        req.session.connected_user = null;
        res.json({ msg: "Field is Empty!", data: null, success: false });
        return;
    }

    con.query('SELECT * FROM users WHERE username = ?', [username], function (err, result, fields) {
        if (err) {
            res.json(err);
            return;
        }
        if (result.length > 0) {
            console.log(password, " => ", result[0].password);
            bcrypt.compare(password, result[0].password, function (err, result_match) {
                if (result_match) {
                    req.session.user_logged_in = true;
                    req.session.connected_user = result;
                    res.json({ msg: "Pass Match", data: result, success: true });
                } else {
                    req.session.user_logged_in = false;
                    req.session.connected_user = null;
                    res.json({ msg: "Pass do NOT Match", data: null, success: false });
                }
            });
        } else {
            req.session.user_logged_in = false;
            req.session.connected_user = null;
            res.json({ msg: "User Not Found", data: null, success: false });
            return;
        }

    });
});

router.put('/register', function (req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    var username = req.body.username;




    con.query('SELECT * FROM users WHERE username = ?', [username], function (err, result, fields) {
        if (err) {
            res.json(err);
            return;
        }

        if (result.length > 0) {
            // username already Exist
            res.json({ msg: "username already EXIST!!!", data: null, success: false });
            return;
        }
        bcrypt.hash(password, 10, function (err, hash) {
            console.log("Current Pass: ", password);
            console.log("Hased Pass: ", hash);
            con.query('INSERT INTO users (name,username,password,role) VALUES(?,?,?,2)', [name, username, hash], function (err, result, fields) {
                if (err) {
                    res.json(err);
                    return;
                }
                res.json({ msg: "User Added Succesfully", data: null, success: true });
            });
        });

    });
});


router.get('/getUsers', function (req, res, next) {
    console.log(req.session);
    if (req.session.user_logged_in == true) {
        con.query('SELECT * FROM users', function (err, result, fields) {
            if (err) {
                res.json({ msg: "ERROR", data: err, success: false });
                return;
            }
            res.json({ msg: "Users List", data: result, success: true });
            return;
        });

    } else {
        res.json({ msg: "User Not Logged in", data: null, success: false });
        return;
    }
});


router.get('/checkUserConnectedRole', function (req, res, next) {
    console.log(req.session);
    if (req.session.user_logged_in == true) {
        if (req.session.connected_user[0].role < 2) {
            res.json({ msg: "Permittion Granted", data: null, success: true });
            return;
        }
        else {
            res.json({ msg: "Permittion NOT Granted", data: null, success: false });
            return;
        }
    } else {
        res.json({ msg: "User Not Logged in", data: null, success: false });
        return;
    }
});
module.exports = router;
