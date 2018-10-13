var express = require('express');
var lowdb = require('lowdb');
var fileSync = require('lowdb/adapters/FileSync');

var adapter = new fileSync(__dirname + '/../data/user.json');
var db = lowdb(adapter);

var router = express.Router();

router.get('/', (req, res)=> {
    console.log('get');
    res.statusCode = 200;
    res.json({
        'msg' : 'login get'
    });
});

router.post('/', (req, res) =>{
    var data = req.body;
    var email = data.email;
    var password = data.password;
    var user = db.get('users').find({
        email: email,
        password : password
    }).value();
    res.statusCode = 200;
    if(user){
        res.json({
            "success" : "true"
        });
    }else{
        res.json({
            "success" : "false"
        });
    }     
});

module.exports = router;