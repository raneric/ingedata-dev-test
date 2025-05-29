import RoomCard from '../../components/room/RoomCard';
import styles from './customer.module.css';

function CustomerHome() {
  return (
    <div className={styles.roomList}>
      {rooms.map((item, index) => (<RoomCard key={index}room={item}/>))}
    </div>
  )
}

const rooms = [
  { id: 'S1', category: 'Simple', description: 'Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.', pricePerNight: 50, amenities: ['Wi-Fi', 'Fan'] },
  { id: 'S2', category: 'Simple', description: 'Comfort and convenience come together in our Simple Room — the perfect choice for budget-conscious travelers who don’t want to compromise on quality.', pricePerNight: 50, amenities: ['Wi-Fi', 'Fan'] },
  { id: 'P1', category: 'Premium', description: 'Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.', pricePerNight: 100, amenities: ['Wi-Fi', 'TV', 'AC'] },
  { id: 'P2', category: 'Premium', description: 'Elevate your stay with our Premium Room, featuring enhanced space, stylish design, and upgraded amenities for a truly relaxing experience.', pricePerNight: 100, amenities: ['Wi-Fi', 'TV', 'AC'] },
  { id: 'R1', category: 'Royal', description: 'Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.', pricePerNight: 200, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar'] },
  { id: 'R2', category: 'Royal', description: 'Indulge in the luxury you deserve with our Royal Room — a lavish retreat offering top-tier comfort, elegant décor, and exclusive services fit for royalty.', pricePerNight: 200, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar'] },
];


export default CustomerHome;
