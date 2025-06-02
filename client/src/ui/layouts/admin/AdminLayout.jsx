import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { AppPath } from "../../../utils/appConstant";

function AdminLayout() {
  const linkList = [
    {
      path: AppPath.admin.home,
      label: 'Home'
    }, {
      path: AppPath.admin.bookings,
      label: 'Bookings list'
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

export default AdminLayout;
