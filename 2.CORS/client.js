const express = require('express');

const app = express();

app.use(express.static('../2.CORS'));

app.listen(3000, () => console.log('3000端口监听已开启'));
