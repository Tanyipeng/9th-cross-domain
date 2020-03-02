const express = require('express');

const app = express();

app.get('/say', (req, res) => {
  const { cb } = req.query;
  res.end(`${cb}('我不爱你')`);
});
app.listen(8000, () => console.log('8000端口监听已开启'));
