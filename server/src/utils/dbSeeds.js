import Room from '../models/room.model.js';
import Booking from '../models/booking.model.js';
import sequelize from '../config/sequelize.js';

const rooms = [
  { id: 'S1', category: 'Simple', description: 'Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.', pricePerNight: 50, amenities: ['Wi-Fi', 'Fan'] },
  { id: 'S2', category: 'Simple', description: 'Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.', pricePerNight: 50, amenities: ['Wi-Fi', 'Fan'] },
  { id: 'P1', category: 'Premium', description: 'Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.', pricePerNight: 100, amenities: ['Wi-Fi', 'TV', 'AC'] },
  { id: 'P2', category: 'Premium', description: 'Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.', pricePerNight: 100, amenities: ['Wi-Fi', 'TV', 'AC'] },
  { id: 'R1', category: 'Royal', description: 'Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.', pricePerNight: 200, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar'] },
  { id: 'R2', category: 'Royal', description: 'Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.', pricePerNight: 200, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar'] },
];

const bookings = [
  { id: 1, roomId: 'R1', checkInDate: '2025-06-23', checkOutDate: '2025-06-24', price: 200, customerName: 'Alice Smith', customerEmail: 'alice@example.com', customerPhone: '123-456-7890' },
  { id: 2, roomId: 'R1', checkInDate: '2025-05-25', checkOutDate: '2025-05-27', price: 400, customerName: 'Bob Johnson', customerEmail: 'bob@example.com', customerPhone: '234-567-8901' },
  { id: 3, roomId: 'S1', checkInDate: '2025-05-26', checkOutDate: '2025-05-31', price: 250, customerName: 'Carla Diaz', customerEmail: 'carla@example.com', customerPhone: '345-678-9012' },
  { id: 4, roomId: 'P2', checkInDate: '2025-06-13', checkOutDate: '2025-06-17', price: 400, customerName: 'Daniel Wu', customerEmail: 'daniel@example.com', customerPhone: '456-789-0123' },
  { id: 5, roomId: 'S1', checkInDate: '2025-07-15', checkOutDate: '2025-07-16', price: 50, customerName: 'Ella Brown', customerEmail: 'ella@example.com', customerPhone: '567-890-1234' },
  { id: 6, roomId: 'S1', checkInDate: '2025-06-05', checkOutDate: '2025-06-09', price: 200, customerName: 'Frank Green', customerEmail: 'frank@example.com', customerPhone: '678-901-2345' },
  { id: 7, roomId: 'P1', checkInDate: '2025-05-29', checkOutDate: '2025-06-02', price: 400, customerName: 'Grace Lee', customerEmail: 'grace@example.com', customerPhone: '789-012-3456' },
  { id: 8, roomId: 'R1', checkInDate: '2025-05-30', checkOutDate: '2025-05-31', price: 200, customerName: 'Henry Kim', customerEmail: 'henry@example.com', customerPhone: '890-123-4567' },
  { id: 9, roomId: 'S1', checkInDate: '2025-07-08', checkOutDate: '2025-07-10', price: 100, customerName: 'Isla Adams', customerEmail: 'isla@example.com', customerPhone: '901-234-5678' },
  { id: 10, roomId: 'P1', checkInDate: '2025-07-02', checkOutDate: '2025-07-06', price: 400, customerName: 'Jack Lin', customerEmail: 'jack@example.com', customerPhone: '012-345-6789' },
  { id: 11, roomId: 'S1', checkInDate: '2025-07-01', checkOutDate: '2025-07-06', price: 250, customerName: 'Karen Chen', customerEmail: 'karen@example.com', customerPhone: '123-555-7890' },
  { id: 12, roomId: 'R2', checkInDate: '2025-05-26', checkOutDate: '2025-05-27', price: 200, customerName: 'Leo Torres', customerEmail: 'leo@example.com', customerPhone: '234-666-8901' },
  { id: 13, roomId: 'S2', checkInDate: '2025-06-26', checkOutDate: '2025-06-29', price: 150, customerName: 'Maya Patel', customerEmail: 'maya@example.com', customerPhone: '345-777-9012' },
  { id: 14, roomId: 'R2', checkInDate: '2025-06-30', checkOutDate: '2025-07-01', price: 200, customerName: 'Nate Evans', customerEmail: 'nate@example.com', customerPhone: '456-888-0123' },
  { id: 15, roomId: 'R1', checkInDate: '2025-06-25', checkOutDate: '2025-06-28', price: 600, customerName: 'Olivia Martin', customerEmail: 'olivia@example.com', customerPhone: '567-999-1234' },
  { id: 16, roomId: 'S2', checkInDate: '2025-06-08', checkOutDate: '2025-06-11', price: 150, customerName: 'Paul Singh', customerEmail: 'paul@example.com', customerPhone: '678-000-2345' },
  { id: 17, roomId: 'P2', checkInDate: '2025-07-14', checkOutDate: '2025-07-19', price: 500, customerName: 'Quinn White', customerEmail: 'quinn@example.com', customerPhone: '789-111-3456' },
  { id: 18, roomId: 'R2', checkInDate: '2025-07-19', checkOutDate: '2025-07-21', price: 400, customerName: 'Rachel Scott', customerEmail: 'rachel@example.com', customerPhone: '890-222-4567' },
  { id: 19, roomId: 'R2', checkInDate: '2025-06-19', checkOutDate: '2025-06-24', price: 1000, customerName: 'Sam Hall', customerEmail: 'sam@example.com', customerPhone: '901-333-5678' },
  { id: 20, roomId: 'P2', checkInDate: '2025-07-03', checkOutDate: '2025-07-08', price: 500, customerName: 'Tina Ray', customerEmail: 'tina@example.com', customerPhone: '012-444-6789' }
];

async function seed() {
  await sequelize.sync({ force: true });
  await Room.bulkCreate(rooms);
  await Booking.bulkCreate(bookings);
  console.log('Database seeded');
  process.exit();
}

seed();