var express = require('express');
var app = express();

// take the port from command line args if present
const parser = require('./parsedOptions');
var parsedOpts = parser.parsedOptions();
if (parsedOpts.port) {
  port = parsedOpts.port;
} else {
  port = 15432;
}

// function that date and time stamps console log messages
console['logWithDate'] = function (msg) {
  console.log((new Date()).toString() + " " + msg);
}

// the footprints cache
footprints = {};

// Routes
app.get('/footprints', function (req, res) {
  console.logWithDate("Query for footprints: " + JSON.stringify(footprints));
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  res.send(JSON.stringify(footprints));
});

app.get('/footprints/reset', function (req, res) {
  footprints = {};
  console.logWithDate("Footprints reset.");
  res.send();
});

var ar = require('./addRoutes');
ar.addRoutes(app);

// start the app (http server) on the port
console.logWithDate('Starting footprints server on port ' + port.toString() + '.');
app.listen(port);

