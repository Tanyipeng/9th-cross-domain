const express = require('express');
const app = express();
const whiteList = ['http://localhost:3000', 'http://127.0.0.1:5500'];

app.use((req, res, next) => {
  console.log(req.headers);
  if (whiteList.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'PUT');
    res.setHeader('Access-Control-Allow-Headers', 'name,age');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Max-Age', 3); // 预检测时间，单位s
    res.setHeader('Access-Control-Expose-Headers', 'name');
    res.setHeader('name', 'typ');
    if (req.method === 'OPTIONS') {
      res.end();
    }
  }
  next();
})

app.get('/say', (req, res) => {
  const {
    wd
  } = req.query;
  console.log(wd);
  res.end(`我不爱你`);
});

app.put('/say', (req, res) => {
  const {
    wd
  } = req.query;
  console.log(wd);
  res.end(`我不爱你`);
});

app.listen(8000, () => console.log('8000端口监听已开启'));
