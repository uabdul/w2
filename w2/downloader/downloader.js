var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
}

https.get(requestOptions, getAndPrintHTMLChunks);

function getAndPrintHTMLChunks (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received. Length: ', data.length, data);
  });
}

