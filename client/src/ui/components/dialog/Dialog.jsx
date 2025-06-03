
import styles from './dialog.module.css';
function Dialog({ children }) {
  return (
    <div className={styles.dialog}>
      {children}
    </div>
  )
}

export default Dialog;
