const request = require('postman-request');

const output = function (error, response, body) {
    console.log('error:', error);
    console.log('status:', response && response.statusCode + response.statusMessage);
    console.log('Request URL:', response && response.url);
    console.log('body:', body);
    console.log('------------------------------------------');
};

request.get('http://localhost:3000/news', output);

// request.delete('http://localhost:3000/news/1', output);
//request.delete('http://localhost:3000/news/5c5aeffd3544bf2164714c9c', output);

// request.get('http://localhost:3000/news/1', output);

request.get('http://localhost:3000/news/5c5aeffd3544bf2164714c9c', output);

// request.put({
//     url:'http://localhost:3000/news', 
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({'_id': '5c5af429fd31d1454046cde0', 'title': '1', 'description': '3'})
//     }
//     , output);

// request.put({
//     url:'http://localhost:3000/news', 
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({'title': 'test1', 'description': '1'})
//     }
//     , output);

// request.get('http://localhost:3000/news', output);
