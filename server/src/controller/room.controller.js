import { ResourceNotFoundError } from '../utils/errors.js';
import RoomRepository from '../repositories/RoomRepository.js';

/**
 * Controller to fetch all rooms.
 *
 * Response:
 *   - 200 OK with a list of room objects.
 *   - 500 Internal Server Error for other failures.
 */
async function findAllRooms(req, res, next) {
  const { checkInDate, checkOutDate } = req.query;
  try {
    let rooms;
    if (checkInDate && checkOutDate) {
      rooms = await RoomRepository.findAvailableWithin(checkInDate, checkOutDate);
    } else {
      rooms = await RoomRepository.findAll();
    }
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
async function findRoom(req, res, next) {
  const roomId = req.params.id;
  try {
    const room = await RoomRepository.findById(roomId);
    if (!room) {
      throw new ResourceNotFoundError(`Room with ID ${roomId} doesn't exist`)
    }
    res.json(room);
  } catch (error) {
    next(error)
  }

}

async function findRoomBookings(req, res, next) {
  const roomId = req.params.id;
  try {
    const roomBookings = await RoomRepository.findRoomBookings(roomId);
    res.json(roomBookings);
  } catch (error) {
    next(error)
  }
}

export {
  findAllRooms,
  findRoom,
  findRoomBookings
}