/**
 * this should be stored in .env file but for simplicity 
 * and in order tp avoid a lot of configuration I kept it here
 */
const BASE_URL = 'http://localhost:3000';

const AppPath = {
  room: {
    all: '/rooms',
    detailsPath: '/room/:id',
    details: '/room'
  },
  booking: {
    all: '/user/:userId/bookings',
    detailsPath: '/user/:userId/booking/:id',
    userBookingsPath: '/user/:userId/bookings/',
    new: '/booking/new',
    details: '/booking'
  },
  admin: {
    home: '/admin',
    bookings: '/admin/bookings',
  }
}

const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';

const monthList = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DUMMY_USER = {
  id: 1,
  name: 'Alice Smith',
  email: 'alice@example.com',
  phone: '123-456-7890'
}

export {
  BASE_URL,
  AppPath,
  DEFAULT_DATE_FORMAT,
  monthList,
  DUMMY_USER
}
