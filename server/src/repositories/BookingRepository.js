import Booking from "../models/booking.model.js";
import { Op } from "sequelize";

class BookingRepository {

  /**
   * Retrieves all bookings for a specific room by its ID.
   *
   * @param {string} roomId - The ID of the room (e.g., 'S1', 'P2', etc.)
   * @returns {Promise<Array>} A promise that resolves to a list of booking objects.
   */
  async findByRoomId(roomId) {
    return await Booking.findAll({ where: { roomId } });
  }


  /**
   * Retrieves all bookings within the given date range.
   *
   * This method takes two parameters, `checkInDate` and `checkOutDate`, which
   * are expected to be strings in the format of 'YYYY-MM-DD'. It returns a
   * promise that resolves to an array of booking objects.
   *
   * @param {string} checkInDate - The check-in date (inclusive).
   * @param {string} checkOutDate - The check-out date (inclusive).
   * @returns {Promise<Array>} A promise that resolves to an array of booking objects.
   */
  async findByDateRange(checkInDate, checkOutDate) {
    return await Booking.findAll(
      {
        where: {
          checkInDate: {
            [Op.gte]: new Date(checkInDate)
          },
          checkOutDate: {
            [Op.lte]: new Date(checkOutDate)
          }
        }
      });
  }

  /**
   * Retrieves all bookings from the database.
   *
   * @returns {Promise<Array>} A promise that resolves to an array of booking objects.
   */
  async findAll() {
    return await Booking.findAll();
  }

  /**
   * Retrieves a booking by its ID.
   *
   * @param {number} id - The ID of the booking to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the booking object if found,
   *  or null if no booking is found with the given ID.
   */
  async findById(id) {
    return await Booking.findByPk(id);
  }
}


export default new BookingRepository();