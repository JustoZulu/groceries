var mongoose = require('mongoose');

// Create a schema
var GrocerySchema = new mongoose.Schema({
  name: String
});

// return the model
module.exports = mongoose.model('Grocery', GrocerySchema);