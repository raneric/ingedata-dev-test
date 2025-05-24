const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');

class Room extends Model { }

Room.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    pricePerNight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'price_per_night',
    },
    amenities: {
      type: DataTypes.JSON,
      allowNull: false
    },
  }, {
  sequelize,
  modelName: 'Room',
  tableName: 'rooms',
}
);

module.exports = Room;