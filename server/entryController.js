var Entry = require('./entryModel.js');
var Q = require('q');

var createEntry = Q.denodify(Entry.create, Entry);
var findAllEntries = Q.denodify(Entry.find, Entry);
var findEntry = Q.denodify(Entry.findOne, Entry);

module.exports = {
  allEntries: function(req, res, next) {
    findAllEntries({})
    .then(function(entries) {
      res.json(entries);
    })
    .fail(function(error) {
      next(error);
    });
  }, 

  test: function() {
    console.log('hello');
  },

  newEntry: function(req, res, next) {
    var name = req.body.name;
    var location = req.body.location;
    var rating = req.body.rating;
    findEntry({name: name})
    .then(function(match) {
      if (match) {
        console.log('made it in here');
        res.send(match)
      }
    })
    .then(function(name) {
      if (name) {
        var newEntry = {
          name: name, 
          location: location, 
          rating: rating
        };
        return createEntry(newEntry);
      }
    })
    .then(function(createdEntry) {
      if (createdEntry) {
        res.json(createdEntry)
      }
    })
    .fail(function(error) {
      next(error);
    });
  }
}