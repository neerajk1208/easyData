var entriesController = require('./entryController');

console.log("what is entriesController?", entriesController);

module.exports = function(app, express) {
  app.get('/entries/', entriesController.allEntries);
  app.post('/entries/', entriesController.newEntry);
}