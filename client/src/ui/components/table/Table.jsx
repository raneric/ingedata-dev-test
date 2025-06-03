import styles from './table.module.css';

const { tableWrapper, table } = styles;

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
