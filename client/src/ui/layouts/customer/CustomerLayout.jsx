import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { AppPath, DUMMY_USER } from "../../../utils/appConstant";
import Hero from "../../components/heroes/Hero";

function CustomerLayout() {
  const linkList = [
    {
      path: AppPath.room.all,
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
      <Header linkList={linkList} />
      <Hero />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default CustomerLayout;
