const express = require('express');
const path = require('path');
require('dotenv').config();
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
