var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var route = require('./routes');



/**============
 *  mongoDB connect
 */
// mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
mongoose.connect('mongodb://' + '127.0.0.1' + ':' + '27017' + '/' + 'MyMongoDB', 
    {useNewUrlParser: true, useUnifiedTopology: true, });
const db = mongoose.connection;
//Added check for DB connection
db.on('connected', () => console.log('MongoDB connected'));
db.on('error', () => console.log('MongoDB connection failed'));

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
  return res.status(200).send('server SERVICE - 127.0.0.1 is running');
});
/** =========================
 *  Routes
 */
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', route.UsersdetailRouter);
app.use('/users', route.UsersRouter);
app.use('/userinfo', route.UserInfoRouter);
// app.use('/userdescription', route.UserdescriptionRouter);

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


const server = app.listen(process.env.PORT || 9000, () =>{
  console.log(`Server is running on http://localhost:9000`);
});

// module.exports = app;
