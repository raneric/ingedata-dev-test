
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { ApiPath } from "../../../utils/appConstant";

function CustomerLayout() {

  const linkList = [
    {
      path: ApiPath.room.all,
      label: 'Home'
    }, {
      path: ApiPath.booking.userBookingsPath,
      label: 'My bookings'
    }
  ]

  return (
    <>
      <Header linkList={linkList} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default CustomerLayout;
