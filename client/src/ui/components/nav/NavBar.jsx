import { Link } from 'react-router';
import styles from './nav.module.css';
import Logo from '../../core/Logo';
import { Button, IconButton } from '../../core/Button';
import Icon from '../../core/Icon';
import login from '../../../assets/icons/login.png';
import logout from '../../../assets/icons/logout.png';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../../context/useUserContext';
const { navBar, logo, buttonText, transparent } = styles;

function NavBar({ linkList, onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated } = useUserContext();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navBar} ${scrolled ? transparent : ''}`}>
      <Logo className={logo} />
      <ul>
        {linkList.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
        {isAuthenticated ? (
          <li key={1000}>
            <Link to="/">My bookings</Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
      {isAuthenticated ? (
        <IconButton onClick={onLoginClick}>
          <span className={buttonText}>Logout</span>
          <Icon iconFile={logout} />
        </IconButton>
      ) : (
        <IconButton onClick={onLoginClick}>
          <span className={buttonText}>Login</span>
          <Icon iconFile={login} />
        </IconButton>
      )}
    </nav>
  );
}

export default NavBar;
