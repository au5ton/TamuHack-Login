var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var bodyParser = require('body-parser')
var api = require('./routes/api');
var private = require('./routes/private')
const path = require('path');

const port = process.env.NODE_PORT || 3000

var app = express()

app.use('/tamuhack2019', express.static(path.join(__dirname, 'static')))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/tamuhack2019/api', api);
app.use('/tamuhack2019/private', private);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
