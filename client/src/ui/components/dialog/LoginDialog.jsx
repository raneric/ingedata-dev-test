import { Button, IconButton } from '../../core/Button';
import Icon from '../../core/Icon';
import Dialog from './Dialog';
import styles from './dialog.module.css';

import close from '../../../assets/icons/close.png';

function LoginDialog({ onClose }) {
  return (
    <>
      <Dialog>
        <form className={styles.loginForm}>
          <IconButton onClick={onClose} className={styles.closeButton}>
            <Icon iconFile={close} />
          </IconButton>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter your user name..."
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type your password..."
              required
            />
          </div>
          <Button className={styles.submitButton} type="submit">
            Login
          </Button>
        </form>
      </Dialog>
    </>
  );
}

export default LoginDialog;
