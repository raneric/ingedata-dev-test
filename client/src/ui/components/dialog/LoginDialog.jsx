import { Button } from '../../core/Button';
import Dialog from './Dialog';
import styles from './dialog.module.css';
function LoginDialog() {
  return (
    <>
      <Dialog>
        <form className={styles.loginForm}>
          <h2>Login</h2>
          <div className={styles.inputGroup}>
            <label htmlFor='username'>Username :</label>
            <input type='text' id='username' name='username' required placeholder='Enter your user name...' />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='password'>Password :</label>
            <input type='password' id='password' name='password' placeholder='Type your password...' required />
          </div>
          <Button className={styles.submitButton} type='submit'>
            Login
          </Button>
        </form>
      </Dialog>
    </>
  );
}

export default LoginDialog;
