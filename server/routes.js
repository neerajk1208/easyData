var entriesController = require('./entryController');

module.exports = function(app, express) {
  app.post('/entries/', entriesController.newEntry);
  app.get('/entries/', entriesController.allEntries);
}