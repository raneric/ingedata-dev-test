import { Booking, Room } from "../models/index.js";
import sequelize from '../config/sequelize.js';
import { QueryTypes } from "sequelize";


class RoomRepository {

  /**
   * Retrieves all rooms from the database.
   *
   * @returns {Promise<Array>} A promise that resolves to an array of room objects.
   */
  async findAll() {
    return await Room.findAll();
  }

  /**
   * Retrieves all rooms that are available within the given date range.
   *
   * This is determined by checking if the room ID is not present in the Bookings
   * table, where the booking's check-in date is before the given check-out date
   * and the booking's check-out date is after the given check-in date.
   *
   * @param {string} checkInDate - The check-in date (inclusive).
   * @param {string} checkOutDate - The check-out date (inclusive).
   * @returns {Promise<Array>} A promise that resolves to an array of room objects.
   */
  async findAvailableWithin(checkInDate, checkOutDate) {

    const query = `SELECT * from rooms WHERE id NOT IN (
                  SELECT roomId FROM Bookings
                  WHERE NOT (
                    checkOutDate <= :checkInDate OR
                    checkInDate >= :checkOutDate
                  )
                )`;

    const rawRooms = await sequelize.query(
      query,
      {
        replacements: {
          checkInDate: checkInDate,
          checkOutDate: checkOutDate
        },
        type: QueryTypes.SELECT,
      });
    const rooms = rawRooms.map((room) => {
      return {
        ...room,
        amenities: JSON.parse(room.amenities),
      };
    });
    return rooms;
  }

  /**
   * Retrieves a room by its ID.
   *
   * @param {string} roomId - The ID of the room to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the room object if found,
   *  or null if no room is found.
   */
  async findById(roomId) {
    return await Room.findByPk(roomId);
  }

  /**
   * Retrieves a room and its bookings by the room's ID.
   *
   *
   * @param {string} roomId - The ID of the room to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the room object with its bookings if found,
   *  or null if no room is found.
   */
  async findRoomBookings(roomId) {
    const room = await Room.findAll({
      where: {
        id: roomId
      },
      include: [
        {
          model: Booking,
        }
      ]
      });
    return room;
  }
}


export default new RoomRepository();