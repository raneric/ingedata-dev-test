import { Button } from '../../../core/Button';
import styles from './form.module.css';

import Calendar from '../../calendar/Calendar';
import RoomLargeCard from '../../room/roomCards/RoomLargeCard';

import { differenceInDays } from 'date-fns';
import { useState } from 'react';
import Divider from '../../../core/Divider';
import { useLoaderData } from 'react-router';
import { createBooking } from '../../../../services/userService';

const {
  bookButton,
  form,
  cart,
  price } = styles;


function BookingForm() {
  const room = useLoaderData()[0];

  const [bookedDaysNumber, setBookedDaysNumber] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  const [bookedDates, setBookedDates] = useState({});

  const handleDateSelect = (selectedStartDate, clickedDate, selectedEndDate) => {
    if (!selectedStartDate && !selectedEndDate) return;

    let nbOfBookedDays = differenceInDays(clickedDate, selectedStartDate) + 1;

    setBookedDaysNumber(nbOfBookedDays);
    setTotalPrice(nbOfBookedDays * room.pricePerNight);

    if (nbOfBookedDays === 1) {
      setBookedDates({
        checkInDate: selectedStartDate,
        checkOutDate: selectedEndDate
      })
    } else {
      setBookedDates({
        checkInDate: selectedStartDate,
        checkOutDate: selectedEndDate
      })
    }
  }

  const handleSubmit = async () => {
    createBooking(1, room.id, bookedDates, totalPrice);
  }

  return (
    <div className={form} >
      <RoomLargeCard showBookButton={false} room={room} />
      <div className={cart}>
        <Calendar
          onRangeChange={handleDateSelect}
          bookings={room.Bookings}
          isRangeSelectable={true} />
        <Divider />
        <span>Total Booked days : {bookedDaysNumber}</span>
        <Divider />
        <span>Price : <span className={price}>{totalPrice} $</span> </span>
        <Divider />
        <Button
          onClick={handleSubmit}
          className={bookButton}
          isDisabled={totalPrice === 0}
        >
          <span>Book now</span>
        </Button>
      </div>
    </div >
  )
}

export default BookingForm;
