var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var client_response = require('../modules/client_response');
var con = require('./../modules/connection').getConnection();

/* GET users listing. */
router.get('/', function (req, res, next) {
    client_response.clear();
    con.query('SELECT * FROM users u left join jobs j on j.id = u.job_id', function (err, users, fields) {
        if (err) {
            console.log(err);
            client_response.setResponse(false, true, "There Was an Error...", err);
            res.json(client_response.getData());
            return;
        }
        client_response.setResponse(true, false, "Users List", users);
        res.json(client_response.getData());
    });
});

// Insert User
router.put('/', (req, res, next) => {
    var name = (req.body.name) ? req.body.name : "";
    var age = (req.body.age) ? req.body.age : "";
    var phone = (req.body.phone) ? req.body.phone : "";
    var job_id = (req.body.job_id) ? req.body.job_id : "";

    var err_fields = [];
    if (name == "") {
        err_fields.push("Name is Empty");
    }
    if (age == "") {
        err_fields.push("Age is Empty");
    }
    if (phone == "") {
        err_fields.push("Phone is Empty");
    }
    if (job_id == "") {
        err_fields.push("Job Not Selected");
    }

    if (err_fields.length > 0) {
        // somthimg missing...
        client_response.setResponse(false, false, " somthimg missing...", err_fields);
        res.json(client_response.getData());
    } else {
        // Enter New User...
        con.query(`INSERT INTO users (name,age,phone,job_id) VALUES (?,?,?,?)`, [name, age, phone, job_id], function (err, users, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error Adding User To DB...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "User Added Succesfully", []);
            res.json(client_response.getData());
        });
    }

});

// Delete User
router.delete('/', function (req, res, next) {
    var err_fields = [];

    var user_id = (req.body.user_id) ? req.body.user_id : "";

    if (user_id == "") {
        err_fields.push("user_id NOT Selected");
    }

    client_response.clear();
    if (err_fields.length > 0) {
        // somthimg missing...
        client_response.setResponse(false, false, " somthimg missing...", err_fields);
        res.json(client_response.getData());
    } else {
        con.query(`DELETE FROM users Where id = ${user_id}`, function (err, users, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "User Deleted...", []);
            res.json(client_response.getData());
        });
    }

});


// Update User
router.post('/', (req, res, next) => {
    var user_id = (req.body.user_id) ? req.body.user_id : "";
    var name = (req.body.name) ? req.body.name : "";
    var age = (req.body.age) ? req.body.age : "";
    var phone = (req.body.phone) ? req.body.phone : "";
    var job_id = (req.body.job_id) ? req.body.job_id : "";

    var err_fields = [];
    if (user_id == "") {
        err_fields.push("user_id NOT Selected");
    }
    if (name == "") {
        err_fields.push("Name is Empty");
    }
    if (age == "") {
        err_fields.push("Age is Empty");
    }
    if (phone == "") {
        err_fields.push("Phone is Empty");
    }
    if (job_id == "") {
        err_fields.push("Job Not Selected");
    }


    if (err_fields.length > 0) {
        // somthimg missing...
        client_response.setResponse(false, false, " somthimg missing...", err_fields);
        res.json(client_response.getData());
    } else {
        // Enter New User...
        con.query(`UPDATE users SET name=?,age=?,phone=?,job_id=? WHERE id=?`, [name, age, phone, job_id, user_id], function (err, users, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error Updating User To DB...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "User Updated Succesfully", []);
            res.json(client_response.getData());
        });
    }

});


module.exports = router;
