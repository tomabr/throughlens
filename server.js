var express = require('express');
var https = require('https');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var sslkey = fs.readFileSync('ssl-key.pem');
var sslcert = fs.readFileSync('ssl-cert.pem');
var httpsOptions = {key: sslkey, cert: sslcert};

app.use('/', express.static('public'));


https.createServer(httpsOptions, app).listen(8000, function() {
    console.log('Express HTTPS server listening on port 8000');
});
