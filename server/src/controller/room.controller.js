import Room from '../models/room.model.js';
import { ResourceNotFoundError, ApplicationError } from '../utils/errors.js';

async function getAllRooms(req, res, next) {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    next(error)
  }
}

async function getRoomById(req, res, next) {
  const roomId = req.params.id;
  try {
    const room = await Room.findOne({ where: { id: roomId } });
    if (!room) {
      throw new ResourceNotFoundError(`Room with ${roomId} not found`)
    }
    res.json(room);
  } catch (error) {
    next(error)
  }

}

export {
  getAllRooms,
  getRoomById
}