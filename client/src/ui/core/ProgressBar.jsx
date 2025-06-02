import styles from './core.module.css';
import appLayoutStyles from '../appLayout.module.css';

const {
  grid,
  grid2Cols,
  gridItemFullRow,
  gridRowGapSmall
} = appLayoutStyles

function ProgressBar({ value, max, id, dataInfo }) {
  return (
    <div className={`${grid} ${grid2Cols} ${gridRowGapSmall} ${styles.progressItem}`}>
      <label
        className={[`${gridItemFullRow}`]}
        htmlFor={`progress-item-${id}`}>
        {dataInfo}
      </label>

      <progress
        id={`progress-item-${id}`}
        value={value}
        max={max} />

      <label
        htmlFor={`progress-item-${id}`}>
        {value}
        %</label>
    </div>
  )
}

export default ProgressBar;
