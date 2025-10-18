import { Outlet } from "react-router-dom";
import NavBar from "../../components/nav/NavBar";
import { AppPath } from "../../../utils/appConstant";

function AdminLayout() {
  const linkList = [
    {
      path: AppPath.admin.home,
      label: "Home",
    },
    {
      path: AppPath.admin.bookings,
      label: "Bookings list",
    },
  ];

  return (
    <>
      <NavBar linkList={linkList} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
