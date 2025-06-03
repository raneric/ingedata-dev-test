import styles from './dialog.module.css';
import appLayoutStyles from '../../appLayout.module.css';
import Dialog from './Dialog';
import { Button } from '../../core/Button';
const {
  grid,
  gridItemFullRow,
  grid2Cols,
  gridItemCenter
} = appLayoutStyles

function ConfirmationDialog({ handleDialogYes, handleDialogNo }) {
  return (
    <>
      <Dialog >
        <div className={`${grid} ${grid2Cols} ${styles.confirmationDialog}`}>
          <p className={`${gridItemFullRow} ${gridItemCenter}`}>Are you sure?</p>
          <Button onClick={handleDialogYes} >Yes</Button>
          <Button onClick={handleDialogNo} >No</Button>
        </div>
      </Dialog>
    </>
  )
}

export default ConfirmationDialog;
