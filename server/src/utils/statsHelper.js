import { differenceInDays, lastDayOfMonth } from 'date-fns';

function calculateFulfillmentRates(bookings, fulfillmentDate = new Date()) {
  const totalDayOfTheMonth = lastDayOfMonth(fulfillmentDate).getDate();
  const totalBookingByRoom = {};

  bookings.forEach(booking => {
    const checkInDate = new Date(booking.checkInDate);
    const checkOutDate = new Date(booking.checkOutDate);
    const days = differenceInDays(checkOutDate, checkInDate);
    if (checkInDate.getMonth() === fulfillmentDate.getMonth()) {
      totalBookingByRoom[booking.roomId] = (totalBookingByRoom[booking.roomId] || 0) + days;
    }
  });

  const occupancyRate = { rooms: [], overall: 0 }

  let sumRate = 0
  Object.entries(totalBookingByRoom).forEach(([key, value]) => {
    const rate = (value / totalDayOfTheMonth) * 100;
    occupancyRate.rooms.push({ roomId: key, occupancyRate: rate })
    sumRate += rate;
  });

  occupancyRate.overall = sumRate / 6;

  return occupancyRate;
  ;
}

export {
  calculateFulfillmentRates
}