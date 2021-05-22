'use strict';

const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);

app.get('/', function (req, res) {
    res.send('Hello');
});

server.listen(80, function(){
    console.log('Server started.');
});