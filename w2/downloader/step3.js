var https = require('https');



var output = '';


function getAndPrintHTML(options) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      output = output + data;
    });
    response.on('end', function () {
      console.log(output);
    });
  });
}

getAndPrintHTML({host: 'sytantris.github.io', path: '/http-examples/step1.html'})