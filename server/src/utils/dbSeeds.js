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
  {
    id: 1,
    roomId: 'R1',
    checkInDate: '2025-06-23',
    checkOutDate: '2025-06-24'
  },
  {
    id: 2,
    roomId: 'R1',
    checkInDate: '2025-05-25',
    checkOutDate: '2025-05-27'
  },
  {
    id: 3,
    roomId: 'S1',
    checkInDate: '2025-05-26',
    checkOutDate: '2025-05-31'
  },
  {
    id: 4,
    roomId: 'P2',
    checkInDate: '2025-06-13',
    checkOutDate: '2025-06-17'
  },
  {
    id: 5,
    roomId: 'S1',
    checkInDate: '2025-07-15',
    checkOutDate: '2025-07-16'
  },
  {
    id: 6,
    roomId: 'S1',
    checkInDate: '2025-06-05',
    checkOutDate: '2025-06-09'
  },
  {
    id: 7,
    roomId: 'P1',
    checkInDate: '2025-05-29',
    checkOutDate: '2025-06-02'
  },
  {
    id: 8,
    roomId: 'R1',
    checkInDate: '2025-05-30',
    checkOutDate: '2025-05-31'
  },
  {
    id: 9,
    roomId: 'S1',
    checkInDate: '2025-07-08',
    checkOutDate: '2025-07-10'
  },
  {
    id: 10,
    roomId: 'P1',
    checkInDate: '2025-07-02',
    checkOutDate: '2025-07-06'
  },
  {
    id: 11,
    roomId: 'S1',
    checkInDate: '2025-07-01',
    checkOutDate: '2025-07-06'
  },
  {
    id: 12,
    roomId: 'R2',
    checkInDate: '2025-05-26',
    checkOutDate: '2025-05-27'
  },
  {
    id: 13,
    roomId: 'S2',
    checkInDate: '2025-06-26',
    checkOutDate: '2025-06-29'
  },
  {
    id: 14,
    roomId: 'R2',
    checkInDate: '2025-06-30',
    checkOutDate: '2025-07-01'
  },
  {
    id: 15,
    roomId: 'R1',
    checkInDate: '2025-06-25',
    checkOutDate: '2025-06-28'
  },
  {
    id: 16,
    roomId: 'S2',
    checkInDate: '2025-06-08',
    checkOutDate: '2025-06-11'
  },
  {
    id: 17,
    roomId: 'P2',
    checkInDate: '2025-07-14',
    checkOutDate: '2025-07-19'
  },
  {
    id: 18,
    roomId: 'R2',
    checkInDate: '2025-07-19',
    checkOutDate: '2025-07-21'
  },
  {
    id: 19,
    roomId: 'R2',
    checkInDate: '2025-06-19',
    checkOutDate: '2025-06-24'
  },
  {
    id: 20,
    roomId: 'P2',
    checkInDate: '2025-07-03',
    checkOutDate: '2025-07-08'
  }
];

(async () => {
  await sequelize.sync({ force: true });
  await Room.bulkCreate(rooms);
  await Booking.bulkCreate(bookings);
  console.log('Database seeded');
  process.exit();
})();