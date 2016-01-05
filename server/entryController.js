var Entry = require('./entryModel.js');
var Q = require('q');

var createEntry = Q.denodeify(Entry.create, Entry);
var findAllEntries = Q.denodeify(Entry.find, Entry);
var findEntry = Q.denodeify(Entry.findOne, Entry);

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

  newEntry: function(req, res, next) {
    console.log("This is my req.body", req.body);
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