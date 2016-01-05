var Entry = require('./models/entry');

module.exports = function(app) {
  app.get('/api/entry', function(req, res) {
    Entry.find(function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    })
  })

  //route to handle creating
  //route to handle deleting
  //route to handle updating

  //route to handle all angular requests

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html')
  })
}