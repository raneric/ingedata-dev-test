import Room from '../models/room.model.js';
import { ResourceNotFoundError } from '../utils/errors.js';

/**
 * Controller to fetch all rooms.
 *
 * Response:
 *   - 200 OK with a list of room objects.
 *   - 500 Internal Server Error for other failures.
 */
async function getAllRooms(req, res, next) {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    next(error)
  }
}


/**
 * Controller to fetch a room by its ID.
 *
 * Route parameter:
 *   - id (string): the ID of the room to retrieve.
 *
 * Response:
 *   - 200 OK with the room object if found.
 *   - 404 Not Found if the room does not exist.
 *   - 500 Internal Server Error for other failures.
 */
async function getRoomById(req, res, next) {
  const roomId = req.params.id;
  try {
    const room = await Room.findByPk(roomId);
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