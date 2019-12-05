var express = require('express');
var router = express.Router();
const connection = require('../bin/DB/connection');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/testMongo', (req, res) => {
    connection.collection('users')
        .find({})
        .then(users => res.json({ users: users }))
        .catch(err => res.json({ error: err }))
});

module.exports = router;
