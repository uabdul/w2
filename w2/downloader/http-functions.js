var https = require('https');

var output = '';

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      output = output + data;
    });
    response.on('end', function() {
      callback(output);
    })
  });
};