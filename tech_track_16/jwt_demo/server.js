// node.js server file

// Import modules
const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken');

// Start setting up express application server
const app = express();

// File Serving
// Note/Todo: there is probably a simply way to serve files

app.get('/', function(req, res) {
  console.log('Request for /');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html');
});

app.get('/client.js', function(req, res) {
  console.log('Request for client.js');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/client.js');
});

// Web Service API
const jwtSecret = 'secret_do_not_share'; 

var numTokenAsJSONRequests = 0;

app.get('/token_as_json', function(req, res) {
  console.log('Request for token_as_json');
  numTokenAsJSONRequests += 1;
  const token = jwt.sign({ "num_requests": numTokenAsJSONRequests }, jwtSecret);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.write('{ "token": "' + token + '" }');
  res.end();
});

app.get('/token_as_json_validator/:token', function(req, res) {
  const token = req.params['token'];
  console.log('Request for token_as_json_validator with token="' + token + '"');
  jwt.verify(token, jwtSecret, function(err, decoded) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    if (decoded === undefined) {
      res.write('{ "valid": false }');
    }
    else {
      res.write('{ "valid": true }');
    }
    res.end();
  });
});



// Start the server
const hostname = '127.0.0.1';
const port = 8080;

app.listen(process.env.PORT || port, process.env.IP || hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});