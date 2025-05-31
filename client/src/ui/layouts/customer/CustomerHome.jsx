import RoomCard from '../../components/room/RoomCard';
import styles from './customer.module.css';
import { getRooms } from '../../../services/roomService.js';
import { useLoaderData } from 'react-router-dom';

function CustomerHome() {
  const roomsLoaded = useLoaderData();

  return (
    <div className={styles.roomList}>
      {roomsLoaded.map((item, index) => (
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
