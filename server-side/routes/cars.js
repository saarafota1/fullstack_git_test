var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var client_response = require('../modules/client_response');
var con = require('./../modules/connection').getConnection();

/* GET cars listing. */
router.get('/', function (req, res, next) {
    client_response.clear();
    con.query('SELECT * FROM cars', function (err, cars, fields) {
        if (err) {
            console.log(err);
            client_response.setResponse(false, true, "There Was an Error...", err);
            res.json(client_response.getData());
            return;
        }
        client_response.setResponse(true, false, "Cars List", cars);
        res.json(client_response.getData());
    });
});

// Insert Car
router.put('/', (req, res, next) => {
    var type = (req.body.type) ? req.body.type : "";
    var year = (req.body.year) ? req.body.year : "";
    var color = (req.body.color) ? req.body.color : "";
    var job_id = (req.body.job_id) ? req.body.job_id : "";

    var err_fields = [];
    if (type == "") {
        err_fields.push("Type is Empty");
    }
    if (year == "") {
        err_fields.push("Year is Empty");
    }
    if (color == "") {
        err_fields.push("Color is Empty");
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
        con.query(`INSERT INTO cars (type,year,color,job_id) VALUES (?,?,?,?)`, [type, year, color, job_id], function (err, users, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error Adding Car To DB...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "Car Added Succesfully", []);
            res.json(client_response.getData());
        });
    }

});

// Delete User
router.delete('/', function (req, res, next) {
    var err_fields = [];
    console.log(req.body);
    var car_id = (req.body.car_id) ? req.body.car_id : "";

    if (car_id == "") {
        err_fields.push("car_id NOT Selected");
    }

    client_response.clear();
    if (err_fields.length > 0) {
        // somthimg missing...
        client_response.setResponse(false, false, " somthimg missing...", err_fields);
        res.json(client_response.getData());
    } else {
        con.query(`DELETE FROM cars Where id = ?`, [car_id], function (err, cars, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "Car Deleted...", []);
            res.json(client_response.getData());
        });
    }

});


// Update Car
router.post('/', (req, res, next) => {
    var car_id = (req.body.car_id) ? req.body.car_id : "";
    var type = (req.body.type) ? req.body.type : "";
    var year = (req.body.year) ? req.body.year : "";
    var color = (req.body.color) ? req.body.color : "";
    var job_id = (req.body.job_id) ? req.body.job_id : "";

    var err_fields = [];
    if (car_id == "") {
        err_fields.push("car_id NOT Selected");
    }
    if (type == "") {
        err_fields.push("Type is Empty");
    }
    if (year == "") {
        err_fields.push("Year is Empty");
    }
    if (color == "") {
        err_fields.push("Color is Empty");
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
        con.query(`UPDATE cars SET type=?,year=?,color=?,job_id=? WHERE id=?`, [type, year, color, job_id, car_id], function (err, cars, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error Updating Car To DB...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "Car Updated Succesfully", []);
            res.json(client_response.getData());
        });
    }

});


module.exports = router;
