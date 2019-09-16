var express = require('express');
var router = express.Router();
var con = require('./../DB/connection').getPool();
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/login', passport.authenticate('local', function (req, res) {
    res.json({ msg: "Passport Fail!!!", success: false });
}),
    function (req, res) {
        res.json({ msg: "Passport Success", success: true });
    });
module.exports = router;