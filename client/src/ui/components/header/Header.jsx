import { Link } from "react-router";
import styles from "./header.module.css";

const { header } = styles;

function Header({ linkList }) {
  return (
    <header className={header}>
      <ul>
        {linkList.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
