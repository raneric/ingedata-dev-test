const roomModel = require('../models/Room')

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await roomModel.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getRoomById = async (req, res) => {
  const roomId = req.params.id;
  console.log(roomId);
  try {
    const room = await roomModel.findOne({ where: { id: roomId } })
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}