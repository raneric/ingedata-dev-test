import { Booking, Room, User } from "../models/index.js";

class UserRepository {
  /**
   * Retrieves all bookings for a specific user.
   *
   * @param {string} userId - The ID of the user whose bookings to retrieve.
   * @returns {Promise<Array>} A promise that resolves to an array of booking objects
   *  with their associated room objects.
   */
  async findBookings(userId) {
    return await Booking.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: Room,
        }
      ]
    });
  }

  /**
   * Retrieves a specific booking for a specific user by booking ID.
   *
   * @param {string} userId - The ID of the user whose booking to retrieve.
   * @param {string} bookingId - The ID of the booking to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the booking object with its associated room if found,
   *  or null if no booking is found.
   */
  async findBooking(userId, bookingId) {
    return await User.findByPk(userId,
      {
        include: [
          {
            model: Booking,
            as: 'bookings',
            where: {
              id: bookingId
            },
            include: [
              {
                model: Room,
              }
            ]
          },
        ],
      })
  }

  /**
   * Deletes a booking by its ID.
   *
   * @param {string} bookingId - The ID of the booking to delete.
   * @returns {Promise<number>} A promise that resolves to the number of rows deleted.
   */

  async deleteBooking(bookingId) {
    return await Booking.destroy({
      where: {
        id: bookingId
      }
    });
  }

  /**
   * Create new booking for a specific user.
   *
   * @param {string} userId - The ID of the user making the booking.
   * @param {Object} data - The booking details including roomId, checkInDate, checkOutDate, and price.
   * @returns {Promise<Object>} A promise that resolves to the newly created booking object.
   */

  async addBooking(userId, data) {
    return await Booking.create({ ...data, userId });
  }

}

export default new UserRepository();