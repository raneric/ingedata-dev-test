import Room from "../models/room.model.js";
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

    const rooms = await sequelize.query(
      query,
      {
        replacements: {
          checkInDate: checkInDate,
          checkOutDate: checkOutDate
        },
        type: QueryTypes.SELECT,
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


  async findRoomBookings(roomId) {
    const query = `SELECT * FROM rooms 
                LEFT JOIN bookings ON rooms.id = bookings.roomId 
                WHERE rooms.id =:roomId`;
    const rawBookings = await sequelize.query(
      query,
      {
        replacements: { roomId },
        type: QueryTypes.SELECT,
      });

    const roomBookings = {
      id: rawBookings[0].id,
      name: rawBookings[0].category,
      category: rawBookings[0].category,
      description: rawBookings[0].description,
      pricePerNight: rawBookings[0].price_per_night,
      amenities: JSON.parse(rawBookings[0].amenities),
      bookings: []
    }

    rawBookings.forEach((booking) => {
      roomBookings.bookings.push({
        bookingId: booking.id,
        checkInDate: booking.checkInDate,
        checkOutDate: booking.checkOutDate
      })
    })

    return roomBookings;
  }
}

export default new RoomRepository();