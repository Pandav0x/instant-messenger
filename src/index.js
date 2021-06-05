'use strict';

const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

server.listen(8080, function(){
    console.log('Server started.');
});