import { Booking, Room, User } from "../models/index.js";

class UserRepository {
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

  async deleteBooking(bookingId) {
    return await Booking.destroy({
      where: {
        id: bookingId
      }
    });
  }

  async addBooking(userId, data) {
    return await Booking.create({ ...data, userId });
  }

}

export default new UserRepository();