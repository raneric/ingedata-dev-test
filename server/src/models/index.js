import Booking from './booking.model.js';
import User from './user.model.js';
import Room from './room.model.js';

Booking.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Booking, { foreignKey: 'userId', as: 'bookings' });

Booking.belongsTo(Room, { foreignKey: 'roomId' });
Room.hasMany(Booking, { foreignKey: 'roomId' });

export {
  Booking,
  User,
  Room
};