import { Button } from "../../../core/Button";
import Divider from "../../../core/Divider";

import roomCardsStyles from "./roomCards.module.css";
import appLayoutStyles from "../../../appLayout.module.css";
import { useNavigate } from "react-router";
import { AppPath } from "../../../../utils/appConstant";
import PriceSection from "./PriceSection";
import Description from "./Description";
import Amenities from "./Amenities";

import getRoomPicture from "../../../../utils/getRoomPicture.js";

const { cardImg, roomInfo, roomCard, category, bookButton } = roomCardsStyles;

const { gridItemFullRow, grid, grid2Cols, gridItemCenter } = appLayoutStyles;

/**
 * A UI component for displaying a single room in a list of rooms.
 *
 * The component displays the room's details such as the category, price per night,
 * description and amenities. It also displays a button to book the room.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.room - The room object.
 * @param {boolean} props.isNewBooking - If true, the component displays a button
 * to book the room.
 *
 * @returns {JSX.Element} A JSX element containing the room component.
 */
function RoomCard({ room, isNewBooking }) {
  const navigate = useNavigate();

  const cardImageFile = getRoomPicture(room.category);

  /**
   * Handler for booking button click.
   *
   * Navigates to the booking page for the specified room. /booking/new?roomId=***
   *
   * @param {string} roomId - The id of the room to be booked.
   */
  const onBookClickHandler = (roomId) => {
    navigate(`${AppPath.booking.new}?roomId=${roomId}`);
  };

  /**
   * Handler for when the entire room card is clicked.
   *
   * Navigates to the room's details page. /room/:id
   *
   * @param {string} roomId - The id of the room.
   */
  function onRoomClickedHandler(e, roomId) {
    navigate(`${AppPath.room.details}/${roomId}`);
  }

  return (
    <article
      className={`${roomCard}  ${gridItemCenter}`}
      onClick={(e) => onRoomClickedHandler(e, room.id)}
    >
      <img className={cardImg} src={cardImageFile} />

      <div className={`${roomInfo} ${grid} ${grid2Cols}`}>
        <span className={category}>
          {room.category} room {room.id}
        </span>

        <PriceSection pricePerNight={room.pricePerNight} />

        <Divider className={gridItemFullRow} />

        <Description description={room.description} />

        <Divider className={gridItemFullRow} />

        <Amenities amenities={room.amenities} />

        {isNewBooking && (
          <Button
            onClick={() => onBookClickHandler(room.id)}
            className={bookButton}
          >
            <span>Book now</span>
          </Button>
        )}
      </div>
    </article>
  );
}

export default RoomCard;
