//Below are the modules required in the server

var express = require('express');
var app = express();
bodyParser = require('body-parser');
var methodOverride = require('method-override');

//CONFIGURATION 

//config files
var db = require('./config/db');

//This is our port
var port = process.env.PORT || 8080;

//The following will connect to the mongoDB database
mongoose.connect(db.url);

//The following will grab data of the body parameters
app.use(bodyParser.json());

require('./app/routes')(app);

//Start the app to listen at the port
app.listen(port);

console.log('We are now listening at ' + port);

exports = module.exports = app;