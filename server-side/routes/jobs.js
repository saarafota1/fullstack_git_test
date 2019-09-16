var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var client_response = require('../modules/client_response');
var con = require('./../modules/connection').getConnection();

/* GET cars listing. */
router.get('/', function (req, res, next) {
    client_response.clear();
    con.query('SELECT * FROM jobs', function (err, cars, fields) {
        if (err) {
            console.log(err);
            client_response.setResponse(false, true, "There Was an Error...", err);
            res.json(client_response.getData());
            return;
        }
        client_response.setResponse(true, false, "Jobs List", cars);
        res.json(client_response.getData());
    });
});

// Insert Car
router.put('/', (req, res, next) => {
    var car_id = (req.body.car_id) ? req.body.car_id : "";
    var position = (req.body.position) ? req.body.position : "";
    var description = (req.body.description) ? req.body.description : "";
    var salary = (req.body.salary) ? req.body.salary : "";
    var seniority = (req.body.seniority) ? req.body.seniority : "";
    var start_date = (req.body.start_date) ? req.body.start_date : "";

    var err_fields = [];
    if (car_id == "") {
        err_fields.push("car_id NOT Selected");
    }
    if (position == "") {
        err_fields.push("position is Empty");
    }
    if (description == "") {
        err_fields.push("description is Empty");
    }
    if (salary == "") {
        err_fields.push("salary is Empty");
    }
    if (seniority == "") {
        err_fields.push("seniority Not Selected");
    }
    if (start_date == "") {
        err_fields.push("start_date Not Selected");
    }

    if (err_fields.length > 0) {
        // somthimg missing...
        client_response.setResponse(false, false, " somthimg missing...", err_fields);
        res.json(client_response.getData());
    } else {
        // Enter New User...
        con.query(`INSERT INTO jobs (car_id,position,description,salary,seniority,start_date) VALUES (?,?,?,?,?,?)`, [car_id, position, description, salary, seniority, start_date], function (err, users, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error Adding Job To DB...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "Job Added Succesfully", []);
            res.json(client_response.getData());
        });
    }

});

// Delete User
router.delete('/', function (req, res, next) {
    var err_fields = [];

    var job_id = (req.body.job_id) ? req.body.job_id : "";

    if (job_id == "") {
        err_fields.push("job_id NOT Selected");
    }

    client_response.clear();
    if (err_fields.length > 0) {
        // somthimg missing...
        client_response.setResponse(false, false, " somthimg missing...", err_fields);
        res.json(client_response.getData());
    } else {
        con.query(`DELETE FROM jobs Where id = ?`, [job_id], function (err, jobs, fields) {
            if (err) {
                console.log(err);
                client_response.setResponse(false, true, "There Was an Error...", err);
                res.json(client_response.getData());
                return;
            }
            client_response.setResponse(true, false, "Job Deleted...", []);
            res.json(client_response.getData());
        });
    }

});


// Update Car
router.post('/', (req, res, next) => {
    var user_id = (req.body.user_id) ? req.body.user_id : "";
    var position = (req.body.position) ? req.body.position : "";
    var description = (req.body.description) ? req.body.description : "";
    var salary = (req.body.salary) ? req.body.salary : "";
    var seniority = (req.body.seniority) ? req.body.seniority : "";
    var start_date = (req.body.start_date) ? req.body.start_date : "";
    var job_id = (req.body.job_id) ? req.body.job_id : "";


    var err_fields = [];
    if (user_id == "") {
        err_fields.push("user_id NOT Selected");
    }
    if (position == "") {
        err_fields.push("position is Empty");
    }
    if (description == "") {
        err_fields.push("description is Empty");
    }
    if (salary == "") {
        err_fields.push("salary is Empty");
    }
    if (seniority == "") {
        err_fields.push("seniority Not Selected");
    }
    if (start_date == "") {
        err_fields.push("start_date Not Selected");
    }
    if (job_id == "") {
        err_fields.push("job_id Not Selected");
    }

    if (err_fields.length > 0) {
        // somthimg missing...
        client_response.setResponse(false, false, " somthimg missing...", err_fields);
        res.json(client_response.getData());
    } else {
        // Enter New User...
        con.query(`UPDATE jobs SET user_id=?,position=?,description=?,salary=?,seniority=?,start_date=? WHERE id=?`,
            [user_id, position, description, salary, seniority, start_date, job_id], function (err, cars, fields) {
                if (err) {
                    console.log(err);
                    client_response.setResponse(false, true, "There Was an Error Updating Job To DB...", err);
                    res.json(client_response.getData());
                    return;
                }
                client_response.setResponse(true, false, "Job Updated Succesfully", []);
                res.json(client_response.getData());
            });
    }

});


module.exports = router;
