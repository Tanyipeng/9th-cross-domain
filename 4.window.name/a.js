const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.listen(3000, () => console.log('3000端口监听已开启'));
