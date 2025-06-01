import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize.js';

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
      allowNull: false
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

export default Room;