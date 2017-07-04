'use strict';
const express =  require('express');
const app =  express();

app.use('/', express.static('public'));

const port = process.env.PORT || 3005;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
console.log(`Server started ${port}`);
});