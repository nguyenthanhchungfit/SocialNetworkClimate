var express = require('express');
var lowdb = require('lowdb');
var fileSync = require('lowdb/adapters/FileSync');

var adapter = new fileSync(__dirname + '/../data/feed.json');
var lowdb2 = require('lowdb');
var db = lowdb(adapter);

var router = express.Router();

router.get('/', (req, res) => {
    var feeds = db.get("feeds");
    res.json({
        feeds
    });
});

module.exports = router;