const express = require('express');
const router = express.Router();
const getAllOffers = require('../functions/getOffers');

router.get('/', function (req, res, next) {
  res.json({ status: 200 });
});

router.get('/getoffers', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).jsonp({ status: 200, message: 'yeet' });
});

module.exports = router;
