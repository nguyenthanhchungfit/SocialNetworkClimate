var express = require('express');
var lowdb = require('lowdb');
var fileSync = require('lowdb/adapters/FileSync');

var adapter = new fileSync(__dirname + '/../data/user.json');

var lowdb2 = require('lowdb');
var db = lowdb(adapter);

var router = express.Router();

router.get('/:userId', (req, res) => {
    var userId = +req.params.userId;
    var user = db.get('users').find({
        'userId' : userId
    }).value();
    res.statusCode = 200;
    res.json({
        user
    })
});

// router.get('/test', (req, res) => {
//     res.statusCode = 200;
//     res.json({
//         "mes" : "OK"
//     })
// });

module.exports = router;