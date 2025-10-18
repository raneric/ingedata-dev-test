import { Link } from "react-router";
import styles from "./header.module.css";
import Logo from "../../core/Logo";
import { Button, IconButton } from "../../core/Button";
import Icon from "../../core/Icon";
import login from "../../../assets/login.png";
const { header, logo } = styles;

function Header({ linkList }) {
  return (
    <header className={header}>
      <Logo className={logo} />
      <ul>
        {linkList.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <IconButton>
        <span>Login</span>
        <Icon iconFile={login} />
      </IconButton>
    </header>
  );
}

export default Header;
