import BookingStats from "../../components/booking/stats/BookingStats";

/**
 * AdminHome component renders is the home page for admin space.
 *
 * It contains a BookingStats component which shows the fulfillment rates for
 * rooms.
 *
 * @returns {JSX.Element} A JSX element containing the BookingStats component.
 */
function AdminHome() {
  return (
    <>
      <BookingStats />
    </ >
  )
}

export default AdminHome
