const express = require('express');
const path = require('path');
require('dotenv').config();
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {
  console.error('MONGODB ERROR');
});
db.on('open', () => {
  console.log(`We have now connected to : ${process.env.CONNECTION_STRING}`);
});

const apiRouter = require('./routes/api');

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

app.use('/', apiRouter);

module.exports = app;
