import RoomCard from '../../components/room/roomCards/RoomCard.jsx';
import appLayoutStyles from '../../appLayout.module.css';
import { getRooms } from '../../../services/roomService.js';
import { useLoaderData } from 'react-router-dom';

const {
  grid,
  grid2Cols,
  gridRowGapXLarge } = appLayoutStyles

function CustomerHome() {
  const rooms = useLoaderData();

  return (
    <div className={`${grid} ${grid2Cols} ${gridRowGapXLarge}`}>
      {rooms.map((item, index) => (
        <RoomCard
          key={index}
          room={item}
        />))}
    </div>
  )
}


export function loader() {
  return getRooms();
}

export default CustomerHome;
