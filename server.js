//Below are the modules required in the server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var entriesController = require('./server/entryController');

var Entry = mongoose.model('Entry', new Schema({
  name: {type: String, unique: true}, 
  location: String, 
  rating: Number
}));

//CONFIGURATION 

//config files
var db = require('./config/db');

//This is our port
var port = process.env.PORT || 8080;

//The following will connect to the mongoDB database
mongoose.connect(db.url);

//The following will grab data of the body parameters
app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

require('./app/routes')(app);

//Start the app to listen at the port

// app.get('/entries', entriesController.allEntries);
//app.post('/entries', entriesController.newEntry);

app.post('/entries', function(req, res) {
  var entry = new Entry({
    name: req.body.name, 
    location: req.body.location, 
    rating: req.body.rating
  });

  entry.save(function(err) {
    if (err) {
      if (err.code === 11000) {
        error = "This is a duplicate name!";
      }
    }
  });
});




app.listen(port);

console.log('We are now listening at ' + port);

exports = module.exports = app;

