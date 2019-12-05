var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');


router.get('/', function (req, res, next) {
    const Cat = mongoose.model('Cat',
        {
            name: String,
            color: String,
            type: String
        });
    const kitty = new Cat({ name: 'Zildjian', color: "White", type: "Street" });
    const kitty2 = new Cat({ name: 'kitty 2', color: "black", type: "Home" });
    const kitty3 = new Cat({ name: 'kitty 3', color: "gray", type: "Street" });
    kitty.save().then(() => console.log('meow'));
    kitty2.save();
    kitty3.save();
    res.json("all good");
});

router.get('/createBlog', function (req, res, next) {
    var b1 = new Blog();
    b1.save().then(a => { res.json("Blog created!!1") });
});
router.get('/getBlogs', function (req, res, next) {
    Blog.find({}).then(result => {
        res.json(result);
    })
});
module.exports = router;