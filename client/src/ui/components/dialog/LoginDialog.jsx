import { Button, IconButton } from '../../core/Button';
import Icon from '../../core/Icon';
import Dialog from './Dialog';
import styles from './dialog.module.css';

import close from '../../../assets/icons/close.png';
import { useState } from 'react';
import { login } from '../../../services/authServices';
import { useUserContext } from '../../../context/UserProvider';

import { jwtDecode } from 'jwt-decode';

const errorInitialState = { has: false, message: '' };

//TODO: Use user context for user info
function LoginDialog({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(errorInitialState);
  const { saveNewUserCredentials } = useUserContext();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const userCredentials = {
      username,
      password,
    };

    const result = await login(userCredentials);

    if (result.success) {
      console.log(result);
      const { email, name } = jwtDecode(result.token);
      const user = {
        name,
        email,
        isLoggedIn: true,
      };
      saveNewUserCredentials(user);
    } else {
      setError({
        has: true,
        message: result.message,
      });
    }
  };

  const userNameOnchangeHandler = (e) => {
    setUsername(e.target.value);
    if (error.has) {
      resetError();
    }
  };

  const passwordOnchangeHandler = (e) => {
    setPassword(e.target.value);
    if (error.has) {
      resetError();
    }
  };

  const resetError = () => {
    setError(errorInitialState);
  };

  return (
    <>
      <Dialog>
        <form onSubmit={onSubmitHandler} method="post" className={styles.loginForm}>
          <IconButton onClick={onClose} className={styles.closeButton}>
            <Icon iconFile={close} />
          </IconButton>
          {error.has && <span className={styles.errorMessage}>{error.message}</span>}
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username :</label>
            <input
              onChange={userNameOnchangeHandler}
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
              onChange={passwordOnchangeHandler}
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
