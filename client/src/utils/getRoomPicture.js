import premium_room from '../assets/premium_room.jpg';
import royal_room from '../assets/royal_room.jpg';
import simple_room from '../assets/simple_room.jpg';

const getRoomPicture = (roomCategory) => {

  let cardImageFile;

  switch (roomCategory) {
    case 'Simple':
      cardImageFile = simple_room
      break;
    case 'Premium':
      cardImageFile = premium_room;
      break;
    default:
      cardImageFile = royal_room;
  }

  return cardImageFile;
}

export default getRoomPicture;