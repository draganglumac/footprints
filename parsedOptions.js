module.exports = {

  parsedOptions: function () {
    var optParser = require('minimist');
    var opts = optParser(process.argv.slice(2));

    var parsed = {};
    if (opts.port) {
      parsed['port'] = opts.port;
    } else if (opts.p) {
      parsed['port'] = opts.p;
    }

    return parsed;
  }

};
