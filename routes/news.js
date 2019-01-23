var express = require('express');
var router = express.Router();
var news = require('../data/news');
var createError = require('http-errors');

/* GET news listing. */
router.get('/', function(req, res, next) {
    res.send(news);
});

router.get('/:id', function(req, res, next) {
    var output = news.news.find(function(n){
        return req.params.id === n.id;
    });
    if (!output) {
        next(createError(400)); // Just to try another error
    } else {
        res.send(output);
    }
});

router.delete('/', function(req, res, next) {
    next(createError(406));
});

// router.delete('/:id', function(req, res, next) {
//     var index = news.news.findIndex(function(n){
//         return req.params.id === n.id;
//     });
//     if (index !== -1) {
//         news.news.slice(index, 1); // this part doesn't work
//         res.sendStatus(200);
//     } else {
//         res.sendStatus(204);
//     }
// });

module.exports = router;