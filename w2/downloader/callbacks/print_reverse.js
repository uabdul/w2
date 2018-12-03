var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var str = '';

function printReverse (html) {
  str = html.split('').reverse().join('');
  console.log(str);
/* Write your code here! */

}

getHTML(requestOptions, printReverse);