module.exports = {

  addRoutes: function (app) {
    routes = require('./config/routes.json');
    routes.forEach( function (route) {
      var footprintsToAdd = footprintsFromUrl(route.urlPattern); 
      if (route.method == 'GET') {
        app.get(route.urlPattern, function (req, res) {
          addFootprintsAndRespond(footprintsToAdd, req.params, res);           
        });
      }
      else if (route.method == 'POST') {
        app.post(route.urlPattern, function (req, res) {
          addFootprintsAndRespond(footprintsToAdd, req.params, res);           
        });
      }
      // add other HTTP verbs as required
    });
  }

};

function footprintsFromUrl(relativeUrl) {
  var urlFootprints = [];
   
  urlParts = relativeUrl.split('/');
  urlParts.forEach( function (part) {
    if (part.startsWith(':')) {
      urlFootprints.push(part.slice(1));
    }
  });

  return urlFootprints;
}

function addFootprintsAndRespond(footprintsToAdd, params, response) {
  footprintsToAdd.forEach( function (fp) {
    footprints[fp] = params[fp]; // footprints is global from index.js
  });
  response.send(); // 200 OK with no body
}
