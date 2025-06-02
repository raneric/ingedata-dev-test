
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { AppPath } from "../../../utils/appConstant";

function CustomerLayout() {

  const linkList = [
    {
      path: AppPath.room.all,
      label: 'Home'
    }, {
      path: '/user/1/bookings', // TODO: authentication and use real user id
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
