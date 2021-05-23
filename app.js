const express = require('express');
const http = require('http');
const app = express();
const zhihu = require('./api/zhihu');
const bilibili = require('./api/bilibili');
const leetcode = require('./api/leetcode')

app.use('/api/zhihu', zhihu);
app.use('/api/bilibili', bilibili);
app.use('/api/leetcode', leetcode);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

module.exports = app;
