var request = require('postman-request');

var output = function (error, response, body) {
    console.log('error:', error);
    console.log('status:', response && response.statusCode + response.statusMessage);
    console.log('Request URL:', response && response.url);
    console.log('body:', body);
    console.log('------------------------------------------');
};

// request.delete('http://localhost:3000/news/1', output);

// request.get('http://localhost:3000/news/1', output);

// request.get('http://localhost:3000/news/5', output);

// request.put({
//     url:'http://localhost:3000/news', 
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({'test': 'test1', 'id': '2'})
//     }
//     , output);

// request.get('http://localhost:3000/news', output);

request.post({
    url:'http://localhost:3000/news', 
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({'news': ['1', '2']})
    }
    , output);
