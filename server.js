var express = require('express');
var app = express();

var mongoose = require('mongoose')
var config = require('./config/database.js');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri);

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', function(req, res){
	res.sendfile(path.join(__dirname + 'client/dist/index.html'));
});

app.listen(3000);

