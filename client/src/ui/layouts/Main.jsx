import { Outlet } from "react-router-dom";
import styles from './layout.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  )
}

export default Main
