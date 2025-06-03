import RoomCard from '../../components/room/roomCards/RoomCard.jsx';

import appLayoutStyles from '../../appLayout.module.css';

import { useLoaderData } from 'react-router-dom';

import SearchFilter from '../../components/filter/SearchFilter.jsx';

const {
  grid,
  grid2Cols,
  gridRowGapXLarge } = appLayoutStyles


/**
 * CustomerHome is the home page for user space which display a list of rooms for user space.
 * It uses the useLoaderData hook from react-router-dom to get the list of rooms from the loader data.
 * The room list can be filtered by date with the SearchFilter component.
 * 
 */
function CustomerHome() {
  const rooms = useLoaderData();
  return (
    <>
      <SearchFilter />
      <section className={`${grid} ${grid2Cols} ${gridRowGapXLarge}`}>
        {rooms.map((item, index) => (
          <RoomCard
            key={index}
            room={item}
            isNewBooking={true}
          />))}
      </section>
    </>

  )
}

export default CustomerHome;
