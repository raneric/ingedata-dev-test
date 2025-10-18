import { Outlet } from "react-router-dom";
import NavBar from "../../components/nav/NavBar";
import { AppPath, DUMMY_USER } from "../../../utils/appConstant";
import Hero from "../../components/hero/Hero";

function CustomerLayout() {
  const linkList = [
    {
      path: AppPath.public.home,
      label: "Home",
    },
    {
      path: "#",
      label: "Room list",
    },
    {
      path: "#",
      label: "Contact",
    },
    {
      path: `/user/${DUMMY_USER.id}/bookings`, // TODO: authentication and use real user id
      label: "My bookings",
    },
  ];

  return (
    <>
      <NavBar linkList={linkList} />
      <Hero />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default CustomerLayout;
