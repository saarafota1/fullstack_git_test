var express = require('express');
var router = express.Router();
var httpResponse = require('./../moduls/httpResponse');
var helpers = require('./../moduls/helpers');

// role: 
// 0 => Admin
// 1 => User
// 2 => Client
users = [
    { name: "vcxsxc", age: 343, username: "saar", password: "123456", role: 0 },
    { name: "vcxsxc", age: 343, username: "dani", password: "123456", role: 1 },
    { name: "vcxsxc", age: 343, username: "sara", password: "123456", role: 2 },
    { name: "vcxsxc", age: 343, username: "sara", password: "123456", role: 1 }
];
/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = new httpResponse();
    console.log(req.session);
    if (req.session.user_logged_in) {
        if (req.session.connected_user.role < 2) { // only Admin And User Can Call This Function
            //console.log(req.session.this_is_my_param);
            response.data = users;
            response.message = "Users List";
            //res.json(users);
        } else {
            response.success = false;
            response.message = "You Are Not Allowed To Run This Function!";
        }

    } else {
        response.success = false;
        response.message = "You Are Not Connected Please Login";
        //res.end("You Are Not Allowed To Run This Function!");
    }

    res.json(response);
});

router.delete('/', function (req, res, next) {
    var response = new httpResponse();
    if (!req.session.user_logged_in) {
        response.message = "You Need To Login!";
        response.success = false;
        response.data = [];
        res.json(response);
    }
    if (!req.session.connected_user) {
        response.message = "You Need To Login!";
        response.success = false;
        response.data = [];
        res.json(response);
    }
    if (req.session.connected_user.role > 1) {
        response.message = "You Are Not Allowed To Run this Function!!";
        response.success = false;
        response.data = [];
        res.json(response);
    }

    res.end('deleteUser... Changed!');

});

router.put('/addUser', function (req, res, next) {
    var response = new httpResponse();
    //helpers.validateFunction(req, res, 0);


    res.end('Add User...');
});

router.delete('/deleteUser', function (req, res, next) {
    if (req.session.user_logged_in) {
        res.end('Delete User...');
    } else {
        res.end("You Are Not Allowed To Run This Function!");
    }
});

router.post('/login', function (req, res, next) {
    var user_name = req.body.username;
    var user_pass = req.body.password;
    var response = new httpResponse();
    //req.session.user_logged_in = null;

    console.log(req.body);
    req.session.user_logged_in = checkUserData(user_name, user_pass);
    req.session.connected_user = getUser(user_name, user_pass);


    if (req.session.user_logged_in) {
        response.success = true;
        response.message = "User Logged in!";
        response.data = users[0];
        //res.end("User Logged in!");
    } else {
        response.success = false;
        response.message = "User Not Found";
        //res.end("User Not Found");
    }

    res.json(response);
});


function checkUserData(user_name, user_pass) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == user_name) {
            if (users[i].password == user_pass) {
                return true;
            }
        }
    }

    return false;
}

function getUser(user_name, user_pass) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == user_name) {
            if (users[i].password == user_pass) {
                return users[i];
            }
        }
    }

    return null;
}
module.exports = router;
