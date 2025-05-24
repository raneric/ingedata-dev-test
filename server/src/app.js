const express = require('express');
const app = express();
const roomRouter = require('./routes/Room');

app.use('/', roomRouter);

module.exports = app