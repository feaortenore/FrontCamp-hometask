const express = require('express');
const router = express.Router();
const News = require('../data/news');
const createError = require('http-errors');
 
/* GET news listing. */
router.get('/', function(req, res, next) {
    News.find({}, function (err, docs) {
        if(!err){
            res.send(docs);
        } else {
            console.log(err.message);
            next(createError(500));
        }
      });
});

router.get('/:id', function(req, res, next) {
    News.findOne({ _id: req.params.id }, function (err, doc) {
        if(!err){
            res.send(doc);
        } else {
            console.log(err.message);
            next(createError(400));
        }
      });
});

router.delete('/', function(req, res, next) {
    next(createError(406));
});

router.delete('/:id', function(req, res, next) {
    News.deleteOne({ _id: req.params.id }, function (err) {
        if(!err){
            res.sendStatus(200);
        } else {
            console.log(err);
            res.sendStatus(204);
        }
      });
});

router.put('/', function(req, res, next) {
    const body = req.body;
    if(body._id) {
        const news = new News(body);
        News.update({ _id: body._id }, news, function (err, doc) {
            if(!err){
                res.sendStatus(200);
            } else {
                next(createError(501));
            }
        });
    } else {
        const news = new News(body);
        News.create(news);
        res.sendStatus(201);
    }
});

module.exports = router;