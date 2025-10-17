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

const { largeCardImg, roomLargeCard, category, bookButton } = roomCardsStyles;

const { gridItemFullRow, grid, grid2Cols, gridRowGapSmall } = appLayoutStyles;

function RoomLargeCard({ room, showBookButton }) {
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

  return (
    <article
      className={`${roomLargeCard} ${grid} ${grid2Cols} ${gridRowGapSmall}`}
    >
      <span className={category}>
        {room.category} room {room.id}
      </span>

      <PriceSection pricePerNight={room.pricePerNight} />

      <Divider className={gridItemFullRow} />

      <img
        className={`${largeCardImg} ${gridItemFullRow}`}
        src={cardImageFile}
      />

      <Divider className={gridItemFullRow} />

      <Description description={room.description} />

      <Divider className={gridItemFullRow} />

      <Amenities amenities={room.amenities} />

      {showBookButton && (
        <Button
          onClick={() => onBookClickHandler(room.id)}
          className={bookButton}
        >
          <span>Go booking</span>
        </Button>
      )}
    </article>
  );
}

export default RoomLargeCard;
