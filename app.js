const express = require('express');
const http = require('http');
const app = express();
const zhihu = require('./api/zhihu');
const bilibili = require('./api/bilibili');
const leetcode = require('./api/leetcode');
const juejin = require('./api/juejin');
const csdn = require('./api/csdn');
const nowcoder = require('./api/nowcoder');
const github = require('./api/github');

app.use('/api/zhihu', zhihu);
app.use('/api/bilibili', bilibili);
app.use('/api/leetcode', leetcode);
app.use('/api/juejin', juejin);
app.use('/api/csdn', csdn);
app.use('/api/nowcoder', nowcoder);
app.use('/api/github', github);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

module.exports = app;
