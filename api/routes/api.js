const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/', function (req, res, next) {
  res.json({ welcome: 'API endpoint of tilbudstracker.dk', status: 200 });
});

router.get('/getoffers', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');

  Item.find({})
    .limit(2500)
    .exec((err, foundItems) => {
      if (!err && foundItems) {
        res
          .status(200)
          .jsonp({ status: 200, itemsAmount: foundItems.length, items: foundItems, message: 'Items found' });
      } else {
        res.status(404).jsonp({ status: 404, itemsAmount: 0, items: [], message: 'No items found' });
      }
    });
});

module.exports = router;
