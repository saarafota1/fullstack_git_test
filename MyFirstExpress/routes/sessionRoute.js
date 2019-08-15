var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.end("Get Session Router...");
});


router.post('/setSession', function (req, res, next) {
    req.session.this_is_my_param = "Test Param";
    console.log(req.session);
    res.end("Set Session Router...");
});
module.exports = router;