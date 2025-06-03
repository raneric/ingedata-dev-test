import styles from './table.module.css';

const { tableWrapper, table } = styles;

/**
 * Table component that serves as a wrapper for rendering table elements.
 *
 * It applies styles to the table and its wrapper and renders any child
 * elements passed to it within the table.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child elements to be rendered within the table.
 *
 * @returns {JSX.Element} A JSX element containing the styled table.
 */

function Table({ children }) {

  return (
    <div className={tableWrapper}>
      <table className={table}>
        {children}
      </table>
    </div>
  );
}

export default Table;
