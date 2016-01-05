var mongoose = require('mongoose');
var crypto = require('crypto');

var EntrySchema = new mongoose.Schema({
  name: String, 
  location: String, 
  rating: Number
});

module.exports = mongoose.model('Entry', EntrySchema);