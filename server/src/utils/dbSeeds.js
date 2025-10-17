import Room from "../models/room.model.js";
import Booking from "../models/booking.model.js";
import sequelize from "../config/sequelize.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const rooms = [
  {
    id: "S1",
    category: "Simple",
    description:
      "Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.",
    pricePerNight: 50,
    amenities: ["Wi-Fi", "Fan"],
  },
  {
    id: "S2",
    category: "Simple",
    description:
      "Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.",
    pricePerNight: 50,
    amenities: ["Wi-Fi", "Fan"],
  },
  {
    id: "P1",
    category: "Premium",
    description:
      "Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.",
    pricePerNight: 100,
    amenities: ["Wi-Fi", "TV", "AC"],
  },
  {
    id: "P2",
    category: "Premium",
    description:
      "Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.",
    pricePerNight: 100,
    amenities: ["Wi-Fi", "TV", "AC"],
  },
  {
    id: "R1",
    category: "Royal",
    description:
      "Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.",
    pricePerNight: 200,
    amenities: ["Wi-Fi", "TV", "AC", "Mini Bar"],
  },
  {
    id: "R2",
    category: "Royal",
    description:
      "Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.",
    pricePerNight: 200,
    amenities: ["Wi-Fi", "TV", "AC", "Mini Bar"],
  },
];

const bookings = [
  {
    id: 1,
    roomId: "R1",
    checkInDate: "2025-06-23",
    checkOutDate: "2025-06-24",
    price: 200,
    userId: 1,
  },
  {
    id: 2,
    roomId: "R1",
    checkInDate: "2025-05-25",
    checkOutDate: "2025-05-27",
    price: 400,
    userId: 1,
  },
  {
    id: 3,
    roomId: "S1",
    checkInDate: "2025-05-26",
    checkOutDate: "2025-05-31",
    price: 250,
    userId: 1,
  },
  {
    id: 4,
    roomId: "P2",
    checkInDate: "2025-06-13",
    checkOutDate: "2025-06-17",
    price: 400,
    userId: 2,
  },
  {
    id: 5,
    roomId: "S1",
    checkInDate: "2025-07-15",
    checkOutDate: "2025-07-16",
    price: 50,
    userId: 1,
  },
  {
    id: 6,
    roomId: "S1",
    checkInDate: "2025-06-05",
    checkOutDate: "2025-06-09",
    price: 200,
    userId: 2,
  },
  {
    id: 7,
    roomId: "P1",
    checkInDate: "2025-05-29",
    checkOutDate: "2025-06-02",
    price: 400,
    userId: 2,
  },
  {
    id: 8,
    roomId: "R1",
    checkInDate: "2025-05-30",
    checkOutDate: "2025-05-31",
    price: 200,
    userId: 2,
  },
  {
    id: 9,
    roomId: "S1",
    checkInDate: "2025-07-08",
    checkOutDate: "2025-07-10",
    price: 100,
    userId: 2,
  },
  {
    id: 10,
    roomId: "P1",
    checkInDate: "2025-07-02",
    checkOutDate: "2025-07-06",
    price: 400,
    userId: 1,
  },
  {
    id: 11,
    roomId: "S1",
    checkInDate: "2025-07-01",
    checkOutDate: "2025-07-06",
    price: 250,
    userId: 1,
  },
  {
    id: 12,
    roomId: "R2",
    checkInDate: "2025-05-26",
    checkOutDate: "2025-05-27",
    price: 200,
    userId: 2,
  },
  {
    id: 13,
    roomId: "S2",
    checkInDate: "2025-06-26",
    checkOutDate: "2025-06-29",
    price: 150,
    userId: 1,
  },
  {
    id: 14,
    roomId: "R2",
    checkInDate: "2025-06-30",
    checkOutDate: "2025-07-01",
    price: 200,
    userId: 2,
  },
  {
    id: 15,
    roomId: "R1",
    checkInDate: "2025-06-25",
    checkOutDate: "2025-06-28",
    price: 600,
    userId: 1,
  },
  {
    id: 16,
    roomId: "S2",
    checkInDate: "2025-06-08",
    checkOutDate: "2025-06-11",
    price: 150,
    userId: 2,
  },
  {
    id: 17,
    roomId: "P2",
    checkInDate: "2025-07-14",
    checkOutDate: "2025-07-19",
    price: 500,
    userId: 2,
  },
  {
    id: 18,
    roomId: "R2",
    checkInDate: "2025-07-19",
    checkOutDate: "2025-07-21",
    price: 400,
    userId: 1,
  },
  {
    id: 19,
    roomId: "R2",
    checkInDate: "2025-06-19",
    checkOutDate: "2025-06-24",
    price: 1000,
    userId: 1,
  },
  {
    id: 20,
    roomId: "P2",
    checkInDate: "2025-07-03",
    checkOutDate: "2025-07-08",
    price: 500,
    userId: 1,
  },
];

const users = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    username: "dummy1",
    password: "dummy1",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Daniel Wu",
    email: "daniel@example.com",
    username: "dummy2",
    password: "dummy2",
    phone: "456-789-0123",
  },
];

async function seed() {
  await sequelize.sync({ force: true });
  await Room.bulkCreate(rooms);
  await User.bulkCreate(users);
  await Booking.bulkCreate(bookings);
  console.log("Database seeded");
  process.exit();
}

seed();
