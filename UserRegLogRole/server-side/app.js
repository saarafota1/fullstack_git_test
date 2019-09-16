var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var passport = require('passport');
var LocalStrategy = require('passport-local');
var con = require('./DB/connection').getPool();
const bcrypt = require('bcrypt');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersPassportRouter = require('./routes/usersPassport');

var app = express();


passport.use(new LocalStrategy(
    function (username, password, done) {
        con.query('SELECT * FROM users WHERE username = ?', [username], function (err, user, fields) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            bcrypt.compare(password, user[0].password, function (err, result_match) {
                if (result_match) {
                    return done(null, user[0]);
                } else {
                    return done(null, false);
                }
            });
        });
    }
));
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 8000 * 2 }
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/usersPassport', usersPassportRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
