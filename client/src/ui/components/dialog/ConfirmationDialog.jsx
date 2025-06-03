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

/**
 * A Dialog that asks the user for confirmation.
 *
 *
 * @param {function} handleDialogYes - The function to call when the user clicks 'Yes'.
 * @param {function} handleDialogNo - The function to call when the user clicks 'No'.
 *
 * @returns A JSX element representing the confirmation dialog.
 */
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
