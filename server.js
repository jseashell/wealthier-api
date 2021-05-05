// ./server.js

/**
 * Setup the dotenv library before anything else
 */
var dotenv = require('dotenv');
var dotenvExpand = require('dotenv-expand');

const env = dotenv.config();
dotenvExpand(env);

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const { newSession } = require('./services/session-service');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const apiRouter = require('./routes/api-route');
const userRouter = require('./routes/user-route');

const app = express();

app.use(newSession());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
