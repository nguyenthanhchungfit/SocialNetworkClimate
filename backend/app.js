var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

var loginApiController = require('./api/LoginAPIController');
var userApiController = require('./api/UserAPIController');
var feedApiController = require('./api/FeedAPIController');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use("/static", express.static(__dirname + "/public"));

//app.use(cors);

app.get('/', (req, res) => {
    var ret = {
        msg: 'Social API'
    };

    res.json(ret);
});

app.use('/api/login', loginApiController);
app.use('/api/user', userApiController);
app.use('/api/feed', feedApiController);

var port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log('App is running on ' + port);
});