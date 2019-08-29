var express = require('express');
var router = express.Router();
var events = require('events');

var dingdong = function () { console.log(this); console.log('Ding Dong'); }
var dingdong2 = function () { console.log('Ding Dong 2'); }
var dingdong3 = function () { console.log('Ding Dong 3'); }
var doorbell = new events.EventEmitter();

router.get('/', function (req, res, next) {
    doorbell.on('ring', function () {
        dingdong();
    });
    doorbell.on('ring', dingdong2);
    doorbell.on('ring', dingdong3);
    doorbell.on('ring23', dingdong3);
    res.end("Set Bell Event...");
});


router.get('/ring', function (req, res, next) {
    doorbell.emit('ring');
    res.end("Ring the Bell...");
})

module.exports = router;