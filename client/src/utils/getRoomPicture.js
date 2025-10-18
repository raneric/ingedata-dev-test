import premium_room from "../assets/img/premium_room.jpg";
import royal_room from "../assets/img/royal_room.jpg";
import simple_room from "../assets/img/simple_room.jpg";

/**
 * A halper function which return a dummy room picture from the assets folder
 *
 * @param {string} roomCategory - The category of the room.
 * @returns {string} The path to the correct room image.
 */
const getRoomPicture = (roomCategory) => {
  let cardImageFile;

  switch (roomCategory) {
    case "Simple":
      cardImageFile = simple_room;
      break;
    case "Premium":
      cardImageFile = premium_room;
      break;
    default:
      cardImageFile = royal_room;
  }

  return cardImageFile;
};

export default getRoomPicture;
