const express = require('express');
const router = express.Router();
const roomController = require('../controller/roomController')

router.get('/rooms', roomController.getAllRooms);

router.get('/room/:id', roomController.getRoomById);

module.exports = router