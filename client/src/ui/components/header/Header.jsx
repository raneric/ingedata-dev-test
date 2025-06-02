import { Link } from "react-router"
import styles from "./header.module.css"

const { welcomeMessage, header } = styles

function Header({ linkList }) {
  return (
    <header className={header} >
      <h1 className={welcomeMessage}>Welcome</h1>
      <ul>
        {linkList.map((item, index) =>
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header
