var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
}

var output = '';

https.get(requestOptions, getAndPrintHTML);

function getAndPrintHTML (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
    output = output + data;
  });

  response.on('end', function () {
    console.log(output);
  });
}

