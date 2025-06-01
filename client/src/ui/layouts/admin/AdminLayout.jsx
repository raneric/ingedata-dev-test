import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { ApiPath } from "../../../utils/appConstant";

function AdminLayout() {
  const linkList = [
    {
      path: ApiPath.admin.home,
      label: 'Home'
    }, {
      path: ApiPath.admin.bookings,
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
