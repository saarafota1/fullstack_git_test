var express = require('express');
var router = express.Router();
var fs = require('fs');
var httpResponse = require('./../moduls/httpResponse');

// ************ CALLBACK ***************///
router.get('/', function (req, res, next) {
    var response = new httpResponse();

    // code to try and run...
    fs.readFile('./files/data.js', function (err, data) {
        if (err) {
            response.message = err.message;
            response.success = false;
            response.error = true;
            response.data = data;
            res.json(response);
            return;
        }
        response.success = true;
        response.data = data;
        res.json(response);
    });



});


router.get('/readFileSync', function (req, res, next) {
    try {
        var data_from_file = fs.readFileSync('./files/data.js');
        console.log(data_from_file);
        res.json(data_from_file);
    } catch (err) {
        res.json(err);
    }
});

// ************** PROMISE **************//
router.get('/promise', function (req, res, next) {
    readFromFilePromise('./files/data.js')
        .then((data) => {
            console.log(data);
            return getBookData(data[0].title);
        })
        .then((data) => {
            console.log(data);
            return getBookImage(data);
        })
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err_promise) => {
            console.log(err_promise);
            res.json(err_promise);
        });

    getBookData()
        .then((data) => {

        })
        .catch((err) => {

        });
    console.log("After Promise...");



    // readFromFilePromise('./files/data.js')
    //     .then((data) => {
    //         console.log(data);
    //         getBookData(data[0].title).then((data)=>{

    //         })
    //     })
});

function getBookData(title) {
    var pro = new Promise((resolve, reject) => {
        try {
            http.get('/getBook', { title: title }, function (err, data) {
                resolve(data);
            })

        } catch (err) {
            // Pass up thrown error to handle with Promise
            // catch handler
            reject(err);
        }
    });

    return pro;
}

function readFromFilePromise(url) {
    var response = new httpResponse();
    return new Promise((resolve, reject) => {
        try {
            var data_from_file = fs.readFileSync('./files/data.json');
            resolve(data_from_file);
        } catch (err) {
            // Pass up thrown error to handle with Promise
            // catch handler
            reject(err);
        }
    });
}
module.exports = router;


function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 2000);
    });
}

async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
    scaryClown().then((res) => {

    });
    var x = await scaryClown();
}

msg();



