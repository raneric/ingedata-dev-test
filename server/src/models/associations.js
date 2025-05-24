/* import Room from './room.model';
import Booking from './booking.model'

Room.hasMany(Booking, {
  foreignKey: 'roomId',
  as: 'bookings'
});

Booking.belongsTo(Room, {
  foreignKey: 'roomId',
  as: 'room'
});

export { Room, Booking } */