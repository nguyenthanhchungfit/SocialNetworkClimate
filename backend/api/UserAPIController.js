var express = require('express');
var lowdb = require('lowdb');
var fileSync = require('lowdb/adapters/FileSync');

var adapter = new fileSync(__dirname + '/../data/user.json');
var adapter2 = new fileSync(__dirname + '/../data/temp.json');
var lowdb2 = require('lowdb');
var db = lowdb(adapter);
var db2 = lowdb(adapter2);

var router = express.Router();

router.get('/', (req, res) => {
    var userId = +req.params.userId;
    var user = db.get('users').find({
        'userId' : userId
    }).value();
    res.statusCode = 200;
    res.json({
        user
    })
});

router.get('/test', (req, res) => {
    res.status(200);
    var feeds = db2.get("feeds").filter(t => t.location == "TPHCM" && t.topic == "nuoc_dang");
    res.json({
        feeds
    })
});

module.exports = router;