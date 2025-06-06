import { Booking, User } from "../models/index.js";
import { SqlQueryOrder } from "../utils/SqlQueryHelper.js";

class BookingRepository {

  /**
   * Retrieves all bookings that match the specified filters.
   *
   * @param {Object} filters - An object representing the filters to apply.
   *  Each key-value pair corresponds to a column and its filter value.
   *  Filters with undefined values will be ignored.
   * @returns {Promise<Array>} A promise that resolves to an array of booking objects
   *  that match the specified filters.
   */

  async findAll(filters = {}, queryOrder = SqlQueryOrder.bookings.byCheckInDateAsc) {
    const specifiedFilter = Object.fromEntries(Object.entries(filters)
      .filter(([_, value]) => value !== undefined)
    );

    return await Booking.findAll({
      where: specifiedFilter,
      raw: true,
      order: [queryOrder]
    });
  }

  /**
   * Retrieves all bookings with their associated users.
   *
   * @returns {Promise<Array>} A promise that resolves to an array of booking objects
   *  with their associated users.
   */
  async findAllBookingWithUsers() {

    return await Booking.findAll({
      include: [
        {
          model: User,
          as: 'user'
        }
      ]
    });
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