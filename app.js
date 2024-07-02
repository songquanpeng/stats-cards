const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
const app = express();
const zhihu = require('./api/zhihu');
const bilibili = require('./api/bilibili');
const leetcode = require('./api/leetcode');
const juejin = require('./api/juejin');
const csdn = require('./api/csdn');
const nowcoder = require('./api/nowcoder');
const github = require('./api/github');
const mycard = require('./api/mycard');
const steam = require('./api/steam');
const codeforces = require('./api/codeforces');
const website = require('./api/website');
const path = require('path');
const { cacheTime } = require('./common/cache');

app.use('/api/zhihu', zhihu);
app.use('/api/bilibili', bilibili);
app.use('/api/leetcode', leetcode);
app.use('/api/juejin', juejin);
app.use('/api/csdn', csdn);
app.use('/api/nowcoder', nowcoder);
app.use('/api/github', github);
app.use('/api/website', website);
app.use('/api/mycard',mycard);
app.use('/api/steam',steam);
app.use('api/codeforces', codeforces)

app.use(
  serveStatic(path.join(__dirname, 'public'), {
    maxAge: cacheTime * 1000,
  })
);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

module.exports = app;
