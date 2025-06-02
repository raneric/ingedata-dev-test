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
}

export default new UserRepository();