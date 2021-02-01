const express = require('express');
const http = require('http');
const app = express();
const zhihu = require('./api/zhihu');

app.use('/api/zhihu', zhihu);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

module.exports = app;
