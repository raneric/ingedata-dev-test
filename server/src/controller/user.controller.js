import UserRepository from '../repositories/UserRepository.js';


async function getUserBookings(req, res, next) {
  const uid = req.params.userId;
  try {
    const bookings = await UserRepository.findBookings(uid);
    res.json(bookings);
  } catch (error) {
    next(error)
  }
}

async function getUserBooking(req, res, next) {
  const id = req.params.id;
  const userId = req.params.userId;
  try {
    const booking = await UserRepository.findBooking(userId, id);
    res.json(booking);
  } catch (error) {
    next(error)
  }
}

async function deleteBooking(req, res, next) {
  const id = req.params.id;
  try {
    UserRepository.deleteBooking(id);
  } catch (error) {
    next(error);
  }
}

export {
  getUserBookings,
  getUserBooking,
  deleteBooking
}