import { Link } from "react-router"
function Header() {
  return (
    <header >
      <h1 className="welcome-message">Welcome</h1>
      <ul>
        <li>
          <Link to="/customer">Home</Link>
        </li>
        <li>
          <Link to="/customer/bookings">My booking</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
