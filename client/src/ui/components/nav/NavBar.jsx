import { Link } from "react-router";
import styles from "./nav.module.css";
import Logo from "../../core/Logo";
import { Button, IconButton } from "../../core/Button";
import Icon from "../../core/Icon";
import login from "../../../assets/icons/login.png";
import { useEffect, useState } from "react";
const { navBar, logo, buttonText, transparent } = styles;

function NavBar({ linkList }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${navBar} ${scrolled ? transparent : ""}`}>
      <Logo className={logo} />
      <ul>
        {linkList.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <IconButton>
        <span className={buttonText}>Login</span>
        <Icon iconFile={login} />
      </IconButton>
    </nav>
  );
}

export default NavBar;
