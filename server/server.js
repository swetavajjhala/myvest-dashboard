'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var http = require('http');
var parser = require('xml2js').parseString;

io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

// use livereload middleware
app.use(require('grunt-contrib-livereload/lib/utils').livereloadSnippet);


app.get('/hello', function(req, res){
	res.render('hello', {greeting: 'hello'});
	// res.render('hello', {greeting: 'bonjour'});
});

exports = module.exports = server;

exports.use = function() {
	app.use.apply(app, arguments);
};

 app.get('/bart', function(req, res) {
      http.get({
         host: 'api.bart.gov',
         path: '/api/etd.aspx?cmd=etd&orig=EMBR&key=MW9S-E7SL-26DU-VV8V'
      }, function (response) {
         var xml = '';
         
         response.on('data', function(chunk) {
            xml += chunk;
         });  

         response.on('end', function(chunk) {
            parser(xml, function (err, result) {
               res.send(result);
            });
         });
      });
   });

