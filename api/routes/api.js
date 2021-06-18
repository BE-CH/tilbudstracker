const express = require('express');
const router = express.Router();
const getAllOffers = require('../functions/getOffers');

router.get('/', function (req, res, next) {
  res.json({ status: 200 });
});

// todo please add database stuff.
router.get('/getoffers', (req, res, next) => {
  let { page, amountprpage } = req.query;
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  getAllOffers('rema', 'all').then((result) => {
    if (!page || page === 'undefined') {
      page = 0;
    }

    if (!amountprpage || amountprpage === 'undefined') {
      amountprpage = 20;
    }

    const startAmount = Math.round(parseInt(page) * parseInt(amountprpage));
    const endAmount = Math.round(parseInt(page) * parseInt(amountprpage) + parseInt(amountprpage));

    result = result.slice(startAmount, endAmount);

    result.sort((a, b) => {
      return b.pricing.procentage_change - a.pricing.procentage_change;
    });
    if (result.length > 0) {
      res.status(200).jsonp({ status: 200, itemsAmount: result.length, items: result, message: 'Items found' });
    } else {
      res.status(404).jsonp({ status: 404, itemsAmount: 0, items: [], message: 'No items found' });
    }
  });
});

module.exports = router;
