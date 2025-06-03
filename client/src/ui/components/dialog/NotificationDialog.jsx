import styles from './dialog.module.css';
import appLayoutStyles from '../../appLayout.module.css';
import Dialog from './Dialog';
import { Button } from '../../core/Button';

const {
  grid,
  gridItemCenter
} = appLayoutStyles

/**
 * A Dialog component that displays a notification message and an Ok button.
 *
 * @param {function} onClick - The function to call when the Ok button is clicked.
 * @param {string} message - The message to be displayed.
 *
 * @returns A JSX element representing the notification dialog.
 */
function NotificationDialog({ onClick, message }) {
  return (
    <>
      <Dialog >
        <div className={`${grid} ${styles.confirmationDialog}`}>
          <p className={gridItemCenter}>{message}</p>
          <Button className={gridItemCenter} onClick={onClick} >Ok</Button>
        </div>
      </Dialog>
    </>
  )
}

export default NotificationDialog;
