/**
 * this should be stored in .env file but for simplicity 
 * and in order tp avoid a lot of configuration I kept it here
 */
const BASE_URL = 'http://localhost:3000';

const ApiPath = {
  room:{
      all: '/rooms',
      details: '/room/:id'
  },
  booking:{
      all: '/bookings',
      details: '/booking/:id',
      userBookings: '/bookings/:userId',
  },
  admin:{
    home: '/admin',
    stats: '/admin/stats'
  }
}

export {
  BASE_URL,
  ApiPath
}