import { Link } from "react-router"
import { ApiPath } from "../../utils/appConstant"

function Header() {
  return (
    <header >
      <h1 className="welcome-message">Welcome</h1>
      <ul>
        <li>
          <Link to={ApiPath.room.all}>Home</Link>
        </li>
        <li>
          <Link to={ApiPath.booking.userBookingsPath}>My booking</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
