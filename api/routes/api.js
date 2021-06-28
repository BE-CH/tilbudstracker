const express = require('express');
const router = express.Router();
const getAllOffers = require('../functions/getOffers');

router.get('/', function (req, res, next) {
  res.json({ status: 200 });
});

// todo please add database stuff.
router.get('/getoffers', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  getAllOffers('all', 'all').then((result) => {
    if (result.length > 0) {
      res.status(200).jsonp({ status: 200, itemsAmount: result.length, items: result, message: 'Items found' });
    } else {
      res.status(404).jsonp({ status: 404, itemsAmount: 0, items: [], message: 'No items found' });
    }
  });
});

module.exports = router;
