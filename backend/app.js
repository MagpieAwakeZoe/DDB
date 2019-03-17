var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vue');


var registRouter = require('./routes/regist');
var diaryRouter = require('./routes/diary');
var commentRouter = require('./routes/comment');
var storyRouter = require('./routes/story');
var scommentRouter = require('./routes/scomment');
var collectionRouter = require('./routes/collection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); 

app.use('/regist', registRouter);
app.use('/diary', diaryRouter);
app.use('/comment', commentRouter);
app.use('/story', storyRouter);
app.use('/scomment', scommentRouter);
app.use('/collection', collectionRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
