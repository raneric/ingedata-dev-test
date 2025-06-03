
import styles from './dialog.module.css';
/**
 * A Dialog component that provides a backdrop and a wrapper for a dialog.
 *
 * The children of this component will be rendered inside the dialog.
 *
 * @param {Object} props - The props of the component.
 * @param {Object} props.children - The children of the component.
 *
 * @returns {Object} A div element containing the children of the component.
 */
function Dialog({ children }) {
  return (
    <div className={styles.dialog}>
      {children}
    </div>
  )
}

export default Dialog;
