import RoomCard from '../../components/room/roomCards/RoomCard.jsx';

import appLayoutStyles from '../../appLayout.module.css';

import { useLoaderData } from 'react-router-dom';

import SearchFilter from '../../components/filter/SearchFilter.jsx';

const {
  grid,
  grid2Cols,
  gridRowGapXLarge } = appLayoutStyles


function CustomerHome() {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <>
      <SearchFilter />
      <section className={`${grid} ${grid2Cols} ${gridRowGapXLarge}`}>
        {rooms.map((item, index) => (
          <RoomCard
            key={index}
            room={item}
          />))}
      </section>
    </>

  )
}

export default CustomerHome;
