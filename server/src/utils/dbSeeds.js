import Room from '../models/room.model.js';
import Booking from '../models/booking.model.js';
import sequelize from '../config/sequelize.js';
import User from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

const rooms = [
  { id: 'S1', category: 'Simple', description: 'Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.', pricePerNight: 50, amenities: ['Wi-Fi', 'Fan'] },
  { id: 'S2', category: 'Simple', description: 'Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.', pricePerNight: 50, amenities: ['Wi-Fi', 'Fan'] },
  { id: 'P1', category: 'Premium', description: 'Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.', pricePerNight: 100, amenities: ['Wi-Fi', 'TV', 'AC'] },
  { id: 'P2', category: 'Premium', description: 'Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.', pricePerNight: 100, amenities: ['Wi-Fi', 'TV', 'AC'] },
  { id: 'R1', category: 'Royal', description: 'Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.', pricePerNight: 200, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar'] },
  { id: 'R2', category: 'Royal', description: 'Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.', pricePerNight: 200, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar'] },
];

const bookings = [
  { id: 1, roomId: 'R1', checkInDate: '2025-06-23', checkOutDate: '2025-06-24', price: 200, userId: 1 },
  { id: 2, roomId: 'R1', checkInDate: '2025-05-25', checkOutDate: '2025-05-27', price: 400, userId: 1 },
  { id: 3, roomId: 'S1', checkInDate: '2025-05-26', checkOutDate: '2025-05-31', price: 250, userId: 1 },
  { id: 4, roomId: 'P2', checkInDate: '2025-06-13', checkOutDate: '2025-06-17', price: 400, userId: 2 },
  { id: 5, roomId: 'S1', checkInDate: '2025-07-15', checkOutDate: '2025-07-16', price: 50, userId: 3 },
  { id: 6, roomId: 'S1', checkInDate: '2025-06-05', checkOutDate: '2025-06-09', price: 200, userId: 4 },
  { id: 7, roomId: 'P1', checkInDate: '2025-05-29', checkOutDate: '2025-06-02', price: 400, userId: 5 },
  { id: 8, roomId: 'R1', checkInDate: '2025-05-30', checkOutDate: '2025-05-31', price: 200, userId: 6 },
  { id: 9, roomId: 'S1', checkInDate: '2025-07-08', checkOutDate: '2025-07-10', price: 100, userId: 8 },
  { id: 10, roomId: 'P1', checkInDate: '2025-07-02', checkOutDate: '2025-07-06', price: 400, userId: 9 },
  { id: 11, roomId: 'S1', checkInDate: '2025-07-01', checkOutDate: '2025-07-06', price: 250, userId: 10 },
  { id: 12, roomId: 'R2', checkInDate: '2025-05-26', checkOutDate: '2025-05-27', price: 200, userId: 10 },
  { id: 13, roomId: 'S2', checkInDate: '2025-06-26', checkOutDate: '2025-06-29', price: 150, userId: 11 },
  { id: 14, roomId: 'R2', checkInDate: '2025-06-30', checkOutDate: '2025-07-01', price: 200, userId: 12 },
  { id: 15, roomId: 'R1', checkInDate: '2025-06-25', checkOutDate: '2025-06-28', price: 600, userId: 13 },
  { id: 16, roomId: 'S2', checkInDate: '2025-06-08', checkOutDate: '2025-06-11', price: 150, userId: 14 },
  { id: 17, roomId: 'P2', checkInDate: '2025-07-14', checkOutDate: '2025-07-19', price: 500, userId: 15 },
  { id: 18, roomId: 'R2', checkInDate: '2025-07-19', checkOutDate: '2025-07-21', price: 400, userId: 16 },
  { id: 19, roomId: 'R2', checkInDate: '2025-06-19', checkOutDate: '2025-06-24', price: 1000, userId: 17 },
  { id: 20, roomId: 'P2', checkInDate: '2025-07-03', checkOutDate: '2025-07-08', price: 500, userId: 1 }
];

const users = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Daniel Wu', email: 'daniel@example.com', phone: '456-789-0123' },
  { id: 3, name: 'Ella Brown', email: 'ella@example.com', phone: '567-890-1234' },
  { id: 4, name: 'Frank Green', email: 'frank@example.com', phone: '678-901-2345' },
  { id: 5, name: 'Grace Lee', email: 'grace@example.com', phone: '789-012-3456' },
  { id: 6, name: 'Henry Kim', email: 'henry@example.com', phone: '890-123-4567' },
  { id: 8, name: 'Isla Adams', email: 'isla@example.com', phone: '901-234-5678' },
  { id: 9, name: 'Jack Lin', email: 'jack@example.com', phone: '012-345-6789' },
  { id: 10, name: 'Karen Chen', email: 'karen@example.com', phone: '123-555-7890' },
  { id: 11, name: 'Maya Patel', email: 'maya@example.com', phone: '345-777-9012' },
  { id: 12, name: 'Nate Evans', email: 'nate@example.com', phone: '456-888-0123' },
  { id: 13, name: 'Olivia Martin', email: 'olivia@example.com', phone: '567-999-1234' },
  { id: 14, name: 'Paul Singh', email: 'paul@example.com', phone: '678-000-2345' },
  { id: 15, name: 'Quinn White', email: 'quinn@example.com', phone: '789-111-3456' },
  { id: 16, name: 'Rachel Scott', email: 'rachel@example.com', phone: '890-222-4567' },
  { id: 17, name: 'Sam Hall', email: 'sam@example.com', phone: '901-333-5678' }
];

async function seed() {

  console.log("USER NAME PLEASE " + process.env.POSTGRES_USER);
  await sequelize.sync({ force: true });
  await Room.bulkCreate(rooms);
  await User.bulkCreate(users);
  await Booking.bulkCreate(bookings);
  console.log('Database seeded');
  process.exit();
}

seed();