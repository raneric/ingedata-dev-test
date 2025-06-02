import { useRouteError } from "react-router";
import errorFile from '../../../assets/error.png';
import styles from './error.module.css';

function Error() {
  const error = useRouteError();
  return (
    <div className={styles.error}>
      <img className={styles.errorImg} src={errorFile} />
      <span className={styles.errorText}>{error.statusCode || error.status} {error.message || error.data}</span>
    </div>
  )
}

export default Error;
