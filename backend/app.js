var express = require('express');
var  bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

var app = express();
var loginApiController = require('./api/LoginAPIController');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors);

app.get('/', (req, res) => {
    res.json({
        msg : 'Social Network Climate'
    });
});

app.use('/api/login/', loginApiController);

var port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('App is running on ' + port);
});