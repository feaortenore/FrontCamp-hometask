var request = require('postman-request');

var output = function (error, response, body) {
    console.log('error:', error);
    console.log('status:', response && response.statusCode + response.statusMessage);
    console.log('Request URL:', response && response.url);
    console.log('body:', body);
    console.log('------------------------------------------');
};

request.get('http://localhost:3000/news', output);

request.get('http://localhost:3000/news/1', output);

request.get('http://localhost:3000/news/5', output);
