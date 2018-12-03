var https = require('https');

var output = '';

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      output = output + data;
    });
    response.on('end', function() {
      callback(output);
    })
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);