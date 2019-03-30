

var express = require('express'),
    app = express(),
    http    = require('http'),
    server  = http.createServer(app);

var dir = __dirname;

app.use(express.static(dir));

var hostname    = '127.0.0.2',
    port        = '8000';

server.listen(port, hostname, function() {
    console.log('Listen to '+hostname+':'+port);
});
