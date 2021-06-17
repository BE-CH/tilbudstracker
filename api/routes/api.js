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
  getAllOffers('rema', 'all').then((result) => {
    result.sort((a, b) => {
      return b.pricing.procentage_change - a.pricing.procentage_change;
    });

    result = result.slice(0, 100);

    console.log('ITEMS:', result.length);

    if (result.length > 0) {
      res.status(200).jsonp({ status: 200, items: result.length, items: result });
    } else {
      res.status(404).jsonp({ stuats: 404, items: 0, message: 'No items found' });
    }
  });
});

module.exports = router;
