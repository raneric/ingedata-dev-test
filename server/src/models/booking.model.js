import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize.js';

class Booking extends Model { }

Booking.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  roomId: {
    type: DataTypes.STRING,
    references: {
      model: 'rooms',
      key: 'id',
    },
  },
  checkInDate: DataTypes.DATE,
  checkOutDate: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Booking',
  tableName: 'bookings',
})

export default Booking;