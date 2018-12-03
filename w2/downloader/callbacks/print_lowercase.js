var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var str = '';

function printLowerCase (html) {
  str = html.toLowerCase();
  console.log(str);
/* Write your code here! */

}

getHTML(requestOptions, printLowerCase);