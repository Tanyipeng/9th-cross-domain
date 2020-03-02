const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.listen(4000, () => console.log('4000端口监听已开启'));
