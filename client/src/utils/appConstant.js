/**
 * this should be stored in .env file but for simplicity 
 * and in order tp avoid a lot of configuration I kept it here
 */
const BASE_URL = 'http://localhost:3000';

const ApiPath = {
  room: {
    all: '/rooms',
    detailsPath: '/room/:id',
    details: '/room'
  },
  booking: {
    all: '/bookings',
    detailsPath: '/booking/:id',
    userBookingsPath: '/bookings/:userId',
    new: '/booking/new',
    details: '/booking'
  },
  admin: {
    home: '/admin',
    stats: '/admin/stats'
  }
}

const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';

export {
  BASE_URL,
  ApiPath,
  DEFAULT_DATE_FORMAT
}