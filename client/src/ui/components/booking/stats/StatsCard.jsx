import ProgressBar from "../../../core/ProgressBar";
import styles from "./stats.module.css";
import appLayoutStyles from '../../../appLayout.module.css';
import Divider from '../../../core/Divider'
import { useLoaderData } from "react-router";

const {
  statsCard,
  statsDetails
} = styles;

const {
  grid,
  grid2Cols,
  gridItemFullRow,
  gridRowGapMedium,
  gridItemAlignCenter
} = appLayoutStyles


function StatsCard() {

  const data = useLoaderData()

  return (
    <div className={`${statsCard} ${grid} ${statsCard} ${grid2Cols} ${gridRowGapMedium}`}>
      <h6>Fulfillment rates for this month</h6>
      <Divider className={gridItemFullRow} />
      <ProgressBar
        className={`${gridItemAlignCenter}`}
        value={data.overall.toFixed(2)}
        max={100}
        index={0}
        dataInfo='Overall occupation' />
      <div className={statsDetails}>
        {
          data.rooms.map((element, index) =>
            <ProgressBar
              key={index}
              value={element.occupancyRate.toFixed(2)}
              max={100}
              index={element.id}
              dataInfo={`Room ${element.roomId}`} />
          )
        }
      </div>
    </div>
  )
}

export default StatsCard;
