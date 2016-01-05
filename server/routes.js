var entriesController = require('./entryController');

module.exports = function(app, express) {
  app.get('/entries', entriesController.allEntries);
  app.post('/entries', entriesController.newEntry);
}