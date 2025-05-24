import roomModel from '../models/Room.js';

async function getAllRooms(req, res) {
  try {
    const rooms = await roomModel.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getRoomById(req, res) {
  const roomId = req.params.id;
  console.log(roomId);
  try {
    const room = await roomModel.findOne({ where: { id: roomId } })
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {
  getAllRooms,
  getRoomById
}