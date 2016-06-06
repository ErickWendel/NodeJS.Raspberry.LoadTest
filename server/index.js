'use strict';

const express = require('express');
const app = express();
const controller = require('./controller/controllers');
const Database = require('./model/database/db.js');
const a = new Database().connect();

const bodyParser = require('body-parser');
const methodOverride = require("method-override");

var routes = new controller(app).init();
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));
app.use('/', routes);


app.get('/', function (req, res) {
    res.json({ 'hello': 'success' });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
