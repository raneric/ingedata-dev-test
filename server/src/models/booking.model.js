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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  checkInDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  checkOutDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'Booking',
  tableName: 'bookings',
})

export default Booking;