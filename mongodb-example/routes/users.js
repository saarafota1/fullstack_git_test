var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/connect', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            res.json(err);
            return;
        }
        console.log("Database created!");
        db.close();
        res.json("Database created!");
    });
});


router.get('/getUsers', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            res.json(err);
            return;
        }
        var dbo = db.db("testDB");
        dbo.collection("users").find({ $or: [{ bla: "bla" }, { age: 33 }] }, { name: 1 }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result);
        });

    });
});

router.post('/', function (req, res, next) {
    let user = {
        name: "hhhh",
        age: 33,
        phone: "87324698324y8932"
    }
    MongoClient.connect(url, (err, db) => {
        if (err) {
            res.json(err);
            return;
        }
        var dbo = db.db("testDB");
        dbo.collection("users").insertOne(user, (err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result);
        });
    });
});

/* Update User */
router.put('/', function (req, res, next) {
    let id_to_update = req.body.id;
    let user = {
        name: "new val",
        age: 50,
        phone: "1122554466"
    }
    MongoClient.connect(url, (err, db) => {
        if (err) {
            res.json(err);
            return;
        }
        var dbo = db.db("testDB");
        dbo.collection("users").updateOne(
            { name: id_to_update },
            { $set: { name: user.name, age: user.age, phone: user.phone } },
            (err, result) => {
                if (err) throw err;
                //console.log(result);
                db.close();
                res.json(result);
            });
    });
});


router.delete('/', function (req, res, next) {
    name = "saar";
    MongoClient.connect(url, (err, db) => {
        if (err) {
            res.json(err);
            return;
        }
        var dbo = db.db("testDB");
        dbo.collection("users").deleteOne({ name: "saar" }, (err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result);
        });
    });
});


module.exports = router;
