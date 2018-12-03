var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var str = '';

function printUpperCase (html) {
  str = html.toUpperCase();
  console.log(str);
/* Write your code here! */

}

getHTML(requestOptions, printUpperCase);