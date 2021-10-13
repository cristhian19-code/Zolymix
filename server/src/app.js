const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.set('port',9000)

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(require('./routes/email.routes'));

module.exports = app;