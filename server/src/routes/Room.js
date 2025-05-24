const express = require('express');
const router = express.Router();

router.get('/rooms', (req, res) => {
  res.send('All rooms');
})

router.get('/room/:id', (req, res) => {
  const roomId = req.params.id;
  res.send(`room with ${roomId}`);
})

module.exports = router