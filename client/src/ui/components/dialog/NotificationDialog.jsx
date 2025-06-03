import styles from './dialog.module.css';
import appLayoutStyles from '../../appLayout.module.css';
import Dialog from './Dialog';
import { Button } from '../../core/Button';

const {
  grid,
  gridItemCenter
} = appLayoutStyles

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
