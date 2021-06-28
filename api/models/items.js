const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  itemID: Number,
  createdAt: Date,
  name: String,
  store: String,
  underline: String,
  description: String,
  department_id: Number,
  department_name: String,
  category_id: Number,
  category_name: String,
  popularity: Number,
  url: String,
  imageurl: String,
  pricing: {
    price: Number,
    max_quantity: Number,
    price_over_max: Number,
    is_on_discount: Boolean,
    normal_price: Number,
    price_per_kilogram: Number,
    price_per_unit: String,
    price_changes_on: String,
    price_changes_type: String,
    is_advertised: Boolean,
    dpeosit: Number,
    procentage_change: Number,
  },
});

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;
