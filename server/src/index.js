const express = require('express');
const app = express();
const port = 3000;
const roomRouter = require('./routes/Room');

app.use('/', roomRouter);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
})