var express = require('express');
var router = express.Router();
var news = require('../data/news');
var createError = require('http-errors');

function generateId() {
    return '' + (+news.news[news.news.length-1].id + 1);
}

function getNewsIndex(id) {
    return news.news.findIndex(function(n){
        return id === n.id;
    });
}
 
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

router.delete('/:id', function(req, res, next) {
    var index = getNewsIndex(req.params.id);
    if (index !== -1) {
        news.news.splice(index, 1);
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    }
});

router.put('/', function(req, res, next) {
    var body = req.body;
    if(body.id) {
        var index = getNewsIndex(body.id);
        if(index === -1){
            next(createError(501));
        } else {
            news.news[index] = body;
            res.sendStatus(200);
        }
    } else {
        body.id = generateId();
        news.news.push(body);
        res.sendStatus(201);
    }
});

router.post('/', function(req, res, next) {
    var body = req.body;
    if(body.news) {
        res.send(news.news.filter(
            (n) => {
                return body.news.includes(n.id)
            }
        ));
    } else {
        next(createError(400));
    }
});

module.exports = router;