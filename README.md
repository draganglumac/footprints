# footprints

Footprints of previous HTTP requests queried via a GET request to /footprints endpoint.

To configure rooutes to footprint use `config/route.json` which is pretty self explanatory. The project uses `express` npm package which is a Sinatra/Flask-like lightweight rapid web-app framework for NodeJS.

To run the package, run the following commands in the source root
```
$> npm install
$> node .
```
and you're away.

By default, the server runs on port 15432, but you can change it via a command line parameter like so

```
$> node . --port=8008
```

