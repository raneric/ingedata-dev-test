import { differenceInDays, lastDayOfMonth } from "date-fns";

/**
 * Calculates the fulfillment rate for all bookings in the given month
 * the current by default. Filter is not implemented yet on the front-end.
 *
 *
 * @param {Object[]} bookings - The bookings to calculate the fulfillment rate for.
 * @param {Date} fulfillmentDate - The date to use for calculating the fulfillment rate. Defaults to the current date.
 * @returns {Object} An object with a rooms property which is an array of objects with roomId and occupancyRate properties, and an overall property which is the average occupancy rate across all rooms.
 */
function calculateFulfillmentRates(bookings, fulfillmentDate = new Date()) {
  const totalDayOfTheMonth = lastDayOfMonth(fulfillmentDate).getDate();
  const totalBookingByRoom = {};

  bookings.forEach((booking) => {
    const checkInDate = new Date(booking.checkInDate);
    const checkOutDate = new Date(booking.checkOutDate);
    const days = differenceInDays(checkOutDate, checkInDate);
    if (checkInDate.getMonth() === fulfillmentDate.getMonth()) {
      totalBookingByRoom[booking.roomId] = (totalBookingByRoom[booking.roomId] || 0) + days;
    }
  });

  const occupancyRate = { rooms: [], overall: 0 };
  //ttttt
  let sumRate = 0;
  Object.entries(totalBookingByRoom).forEach(([key, value]) => {
    const rate = (value / totalDayOfTheMonth) * 100;
    occupancyRate.rooms.push({ roomId: key, occupancyRate: rate });
    sumRate += rate;
  });

  occupancyRate.overall = sumRate / 6;

  return occupancyRate;
}

export { calculateFulfillmentRates };
