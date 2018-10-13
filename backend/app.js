var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

var loginApiController = require('./api/LoginAPIController');
var userApiController = require('./api/UserAPIController');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//app.use(cors);

app.get('/', (req, res) => {
    var ret = {
        msg: 'Social API'
    };

    res.json(ret);
});

app.use('/api/login', loginApiController);
app.use('/api/user/', userApiController);

var port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log('App is running on ' + port);
});